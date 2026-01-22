import React, { useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import TechInfo from './TechInfo'
import './Projects.css'

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState(null)

  const projects = [
    {
      title: 'Kubernetes Multi-Cluster Management',
      description: 'Designed and deployed a multi-region Kubernetes infrastructure with automated failover and load balancing.',
      tech: ['Kubernetes', 'Terraform', 'AWS', 'Helm'],
      github: '#',
      link: '#'
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Implemented end-to-end CI/CD pipelines reducing deployment time from hours to minutes.',
      tech: ['Jenkins', 'Docker', 'GitLab', 'AWS CodePipeline'],
      github: '#',
      link: '#'
    },
    {
      title: 'Infrastructure as Code Platform',
      description: 'Built a complete IaC solution using Terraform and Ansible for managing 500+ servers.',
      tech: ['Terraform', 'Ansible', 'Python', 'AWS'],
      github: '#',
      link: '#'
    },
    {
      title: 'Monitoring & Observability Stack',
      description: 'Set up enterprise-grade monitoring with Prometheus, Grafana, and ELK Stack.',
      tech: ['Prometheus', 'Grafana', 'ELK', 'Kubernetes'],
      github: '#',
      link: '#'
    }
  ]

  return (
    <>
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <button 
                      key={i} 
                      className="tech-badge"
                      onClick={() => setSelectedTech(tech)}
                      title="Click to learn more"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" title="GitHub">
                    <FiGithub size={18} />
                  </a>
                  <a href={project.link} className="project-link" title="View Project">
                    <FiExternalLink size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedTech && <TechInfo tech={selectedTech} onClose={() => setSelectedTech(null)} />}
    </>
  )
}
