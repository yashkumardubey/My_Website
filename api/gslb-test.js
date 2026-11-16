const DEFAULT_EC2_ORIGIN = 'http://15.252.99.51'
const UPSTREAM_TIMEOUT_MS = 1500
const MAX_UPSTREAM_BODY_BYTES = 2048

function getEc2Origin() {
  const configuredOrigin = process.env.GSLB_EC2_ORIGIN || DEFAULT_EC2_ORIGIN

  try {
    const url = new URL(configuredOrigin)
    if (!['http:', 'https:'].includes(url.protocol) ||
        url.username || url.password || url.pathname !== '/' ||
        url.search || url.hash) {
      return null
    }

    return url.origin
  } catch {
    return null
  }
}

async function readBoundedText(response) {
  if (!response.body) return ''

  const reader = response.body.getReader()
  const chunks = []
  let totalBytes = 0

  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      totalBytes += value.byteLength
      if (totalBytes > MAX_UPSTREAM_BODY_BYTES) {
        await reader.cancel()
        return null
      }

      chunks.push(value)
    }
  } finally {
    reader.releaseLock()
  }

  const body = new Uint8Array(totalBytes)
  let offset = 0
  for (const chunk of chunks) {
    body.set(chunk, offset)
    offset += chunk.byteLength
  }

  return new TextDecoder().decode(body)
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0')
  res.setHeader('X-Content-Type-Options', 'nosniff')

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const ec2Origin = getEc2Origin()
  if (ec2Origin) {
    try {
      const response = await fetch(ec2Origin + '/', {
        method: 'GET',
        redirect: 'error',
        headers: { Accept: 'text/plain' },
        signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
      })

      if (response.ok) {
        const body = await readBoundedText(response)
        if (body !== null) {
          return res.status(200).json({
            source: 'ec2',
            healthy: true,
          })
        }
      }
    } catch {
      // The Vercel response is the tested fallback when EC2 is unreachable.
    }
  }

  return res.status(200).json({
    source: 'vercel',
    region: process.env.VERCEL_REGION || 'unknown',
    reason: 'upstream_unavailable',
  })
}
