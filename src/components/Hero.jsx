import React from 'react'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="accent-text">Yash Kumar Dubey</span>
            </h1>
            <p className="hero-subtitle">
              DevOps Engineer & Cloud Architect
            </p>
            <p className="hero-description">
              I specialize in designing and implementing scalable cloud infrastructure, automating CI/CD pipelines, and optimizing Linux environments. With 2.5 years of expertise in AWS, Kubernetes, and modern DevOps practices, I help organizations streamline their deployment processes and achieve 99.99% system uptime.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">2.5</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99.99%</span>
                <span className="stat-label">Uptime</span>
              </div>
            </div>
            
            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">
                View My Work
                <FiArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/yashkumardubey" aria-label="GitHub" className="social-link" target="_blank" rel="noopener noreferrer">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/yash-kumar-dubey-4b4926253" aria-label="LinkedIn" className="social-link" target="_blank" rel="noopener noreferrer">
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:ydubey020@gmail.com" aria-label="Email" className="social-link">
                <FiMail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src="/pic.jpeg" alt="Yash Kumar Dubey" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  )
}
