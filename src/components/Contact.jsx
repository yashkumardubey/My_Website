import React, { useState } from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Send using FormSubmit (no backend needed)
      const response = await fetch('https://formspree.io/f/xyzqwert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name}`
        })
      })

      if (response.ok) {
        // Show success message
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })

        // Reset message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      // Fallback: Copy to clipboard and show instruction
      const emailText = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      navigator.clipboard.writeText(emailText)
      alert('Message copied! Please email it to ydubey020@gmail.com')
      setFormData({ name: '', email: '', message: '' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's connect</h3>
            <p>I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>
            
            <div className="contact-methods">
              <a href="mailto:ydubey020@gmail.com" className="contact-method">
                <FiMail size={20} />
                <span>ydubey020@gmail.com</span>
              </a>
              <a href="tel:+919935891845" className="contact-method">
                <FiPhone size={20} />
                <span>+91 9935891845</span>
              </a>
              <div className="contact-method">
                <FiMapPin size={20} />
                <span>India</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Sending...' : submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
