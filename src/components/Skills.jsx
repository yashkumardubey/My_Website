import React, { useState } from 'react'
import TechInfo from './TechInfo'
import './Skills.css'

export default function Skills() {
  const [selectedTech, setSelectedTech] = useState(null)

  const skillCategories = [
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Helm', 'Jenkins']
    },
    {
      category: 'CI/CD & Automation',
      skills: ['Jenkins', 'GitLab', 'AWS CodePipeline', 'Ansible', 'Python']
    },
    {
      category: 'Monitoring & Logging',
      skills: ['Prometheus', 'Grafana', 'ELK', 'Datadog']
    },
    {
      category: 'Infrastructure',
      skills: ['Linux', 'Networking', 'Security', 'AWS', 'Terraform']
    },
    {
      category: 'Programming & Scripting',
      skills: ['Python', 'Bash', 'Go', 'YAML']
    },
    {
      category: 'Container Orchestration',
      skills: ['Kubernetes', 'Docker', 'Docker Compose', 'Helm']
    }
  ]

  return (
    <>
      <section className="skills" id="skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="skill-category">
                <h3>{category.category}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill, i) => (
                    <button
                      key={i}
                      className="skill-tag"
                      onClick={() => setSelectedTech(skill)}
                      title="Click to learn more"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Professional Summary */}
          <div className="expertise-summary">
            <h3>Professional Summary</h3>
            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-number">2.5</div>
                <p>Years of Experience</p>
              </div>
              <div className="summary-card">
                <div className="summary-number">10</div>
                <p>Successful Projects</p>
              </div>
              <div className="summary-card">
                <div className="summary-number">99.99%</div>
                <p>System Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedTech && <TechInfo tech={selectedTech} onClose={() => setSelectedTech(null)} />}
    </>
  )
}
