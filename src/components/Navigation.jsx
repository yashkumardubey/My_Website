import React, { useState } from 'react'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import './Navigation.css'

export default function Navigation({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <a href="#" className="logo">
            <span>YD</span>
          </a>
          <span className="brand-text">Yash Kumar Dubey</span>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="nav-controls">
          <button 
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
