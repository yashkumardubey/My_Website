import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest'

import handler from '../gslb-test.js'

function createResponseRecorder(method = 'GET') {
  const response = {
    headers: {},
    statusCode: 200,
    body: undefined,
    setHeader(name, value) { this.headers[name] = value; return this },
    status(code) { this.statusCode = code; return this },
    json(value) { this.body = value; return this },
  }

  return { request: { method }, response }
}

describe('GatewayCore EC2 to Vercel fallback endpoint', () => {
  beforeEach(() => {
    vi.stubEnv('GSLB_EC2_ORIGIN', 'http://15.252.99.51')
    vi.stubEnv('VERCEL_REGION', 'iad1')
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('reports EC2 health without exposing the upstream response body', async () => {
    fetch.mockResolvedValue(new Response('backend ip-172-31-13-12.ap-south-1.compute.internal', { status: 200 }))
    const { request, response } = createResponseRecorder()

    await handler(request, response)

    expect(fetch).toHaveBeenCalledWith('http://15.252.99.51/', expect.objectContaining({ redirect: 'error' }))
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ source: 'ec2', healthy: true })
    expect(JSON.stringify(response.body)).not.toContain('ip-172-31')
  })

  it('serves a Vercel response when the EC2 gateway is unavailable', async () => {
    fetch.mockRejectedValue(new Error('connection failed'))
    const { request, response } = createResponseRecorder()

    await handler(request, response)

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ source: 'vercel', region: 'iad1', reason: 'upstream_unavailable' })
  })

  it('serves the Vercel response when EC2 returns an error status', async () => {
    fetch.mockResolvedValue(new Response('unavailable', { status: 503 }))
    const { request, response } = createResponseRecorder()
    await handler(request, response)
    expect(response.body.source).toBe('vercel')
  })

  it('rejects an invalid upstream configuration without making a request', async () => {
    vi.stubEnv('GSLB_EC2_ORIGIN', 'file:///etc/passwd')
    const { request, response } = createResponseRecorder()
    await handler(request, response)
    expect(fetch).not.toHaveBeenCalled()
    expect(response.body.source).toBe('vercel')
  })

  it('rejects methods other than GET without calling the upstream', async () => {
    const { request, response } = createResponseRecorder('POST')
    await handler(request, response)
    expect(response.statusCode).toBe(405)
    expect(fetch).not.toHaveBeenCalled()
  })

  it('does not accept a client-controlled destination', async () => {
    fetch.mockResolvedValue(new Response('Mumbai backend', { status: 200 }))
    const { request, response } = createResponseRecorder()
    request.query = { url: 'http://127.0.0.1:22' }
    await handler(request, response)
    expect(fetch).toHaveBeenCalledWith('http://15.252.99.51/', expect.any(Object))
  })

  it('falls back when the upstream body exceeds the response limit', async () => {
    fetch.mockResolvedValue(new Response('x'.repeat(4096), { status: 200 }))
    const { request, response } = createResponseRecorder()
    await handler(request, response)
    expect(response.body.source).toBe('vercel')
  })
})
