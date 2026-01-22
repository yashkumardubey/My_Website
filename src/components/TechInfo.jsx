import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'
import './TechInfo.css'

const techDetails = {
  'Docker': {
    description: 'Docker is a containerization platform that packages applications and their dependencies into isolated containers for consistent deployment across environments.',
    uses: ['Application packaging', 'Environment consistency', 'Microservices', 'CI/CD pipelines'],
    keyFeatures: ['Lightweight containers', 'Version control', 'Easy scaling', 'Cross-platform']
  },
  'Kubernetes': {
    description: 'Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.',
    uses: ['Container orchestration', 'Auto-scaling', 'Load balancing', 'Rolling updates'],
    keyFeatures: ['Self-healing', 'Horizontal scaling', 'Service discovery', 'Storage orchestration']
  },
  'Terraform': {
    description: 'Terraform is an Infrastructure as Code tool that allows you to define and manage cloud infrastructure using declarative configuration files.',
    uses: ['Infrastructure provisioning', 'Multi-cloud management', 'Resource versioning', 'Infrastructure automation'],
    keyFeatures: ['Declarative syntax', 'State management', 'Module reusability', 'Plan & apply workflow']
  },
  'AWS': {
    description: 'Amazon Web Services is a comprehensive cloud computing platform offering compute, storage, networking, and database services on a pay-as-you-go basis.',
    uses: ['Cloud infrastructure', 'Scalable computing', 'Storage solutions', 'Database management'],
    keyFeatures: ['Global infrastructure', 'Auto-scaling', 'High availability', 'Security & compliance']
  },
  'Helm': {
    description: 'Helm is a package manager for Kubernetes that simplifies deployment of applications by using pre-configured chart packages.',
    uses: ['Kubernetes package management', 'Application deployment', 'Version management', 'Configuration templating'],
    keyFeatures: ['Charts repository', 'Templating engine', 'Release management', 'Dependency handling']
  },
  'Jenkins': {
    description: 'Jenkins is an open-source automation server that enables developers to build, test, and deploy software using CI/CD pipelines.',
    uses: ['Continuous integration', 'Continuous deployment', 'Build automation', 'Testing automation'],
    keyFeatures: ['Plugin ecosystem', 'Distributed builds', 'Pipeline scripting', 'Easy configuration']
  },
  'GitLab': {
    description: 'GitLab is a DevOps platform that provides version control, CI/CD, issue tracking, and collaboration tools all in one integrated platform.',
    uses: ['Version control', 'CI/CD pipelines', 'Issue tracking', 'Team collaboration'],
    keyFeatures: ['Built-in CI/CD', 'Code review tools', 'Security scanning', 'Project management']
  },
  'AWS CodePipeline': {
    description: 'AWS CodePipeline is a continuous delivery service that automates the release pipeline for fast and reliable application and infrastructure updates.',
    uses: ['Continuous delivery', 'Build automation', 'Deployment pipelines', 'Integration testing'],
    keyFeatures: ['Automatic triggering', 'Artifact management', 'Integration with AWS services', 'Multi-stage pipelines']
  },
  'Ansible': {
    description: 'Ansible is an agentless configuration management tool that automates IT tasks like configuration management, application deployment, and task automation.',
    uses: ['Configuration management', 'Application deployment', 'System administration', 'Infrastructure automation'],
    keyFeatures: ['Agentless architecture', 'YAML syntax', 'Idempotent operations', 'Large-scale automation']
  },
  'Python': {
    description: 'Python is a versatile, high-level programming language known for its simplicity, readability, and powerful libraries for various domains.',
    uses: ['Scripting & automation', 'DevOps tooling', 'Data analysis', 'Backend development'],
    keyFeatures: ['Easy syntax', 'Rich ecosystem', 'Cross-platform', 'Extensive libraries']
  },
  'Prometheus': {
    description: 'Prometheus is an open-source monitoring and alerting system that collects metrics from targets and provides powerful querying capabilities.',
    uses: ['Infrastructure monitoring', 'Application metrics', 'Alert management', 'Performance tracking'],
    keyFeatures: ['Pull-based model', 'Time-series database', 'PromQL query language', 'Built-in alerting']
  },
  'Grafana': {
    description: 'Grafana is an open-source visualization and monitoring platform that displays metrics from various data sources through interactive dashboards.',
    uses: ['Metrics visualization', 'Dashboard creation', 'Performance monitoring', 'Data analysis'],
    keyFeatures: ['Multi-source support', 'Rich visualizations', 'Alert notifications', 'User-friendly interface']
  },
  'ELK': {
    description: 'ELK Stack (Elasticsearch, Logstash, Kibana) is a powerful logging and data analysis platform for centralized log management and visualization.',
    uses: ['Log aggregation', 'Log analysis', 'System monitoring', 'Security event logging'],
    keyFeatures: ['Scalable storage', 'Real-time processing', 'Advanced search', 'Visualizations']
  },
  'Bash': {
    description: 'Bash is a Unix shell and command language used for scripting, system administration, and automation of repetitive tasks.',
    uses: ['Shell scripting', 'System administration', 'Task automation', 'DevOps automation'],
    keyFeatures: ['Command-line interface', 'Script automation', 'Variable management', 'Control flow']
  },
  'Go': {
    description: 'Go is a statically-typed, compiled programming language designed for simplicity, efficiency, and concurrent systems programming.',
    uses: ['System tools', 'Microservices', 'CLI applications', 'Cloud tools'],
    keyFeatures: ['Fast compilation', 'Concurrent programming', 'Static typing', 'Cross-platform']
  },
  'YAML': {
    description: 'YAML is a human-readable data serialization language commonly used for configuration files, CI/CD pipelines, and Kubernetes manifests.',
    uses: ['Configuration files', 'CI/CD pipelines', 'Infrastructure as Code', 'Data serialization'],
    keyFeatures: ['Human-readable', 'Minimal syntax', 'Clear hierarchy', 'Wide tool support']
  },
  'Linux': {
    description: 'Linux is a free, open-source operating system kernel used in servers, containers, and embedded systems worldwide.',
    uses: ['Server OS', 'Container platforms', 'System administration', 'Cloud infrastructure'],
    keyFeatures: ['Open-source', 'Multi-user', 'Highly secure', 'Scalable performance']
  },
  'Networking': {
    description: 'Networking encompasses the configuration and management of computer networks including protocols, routing, and connectivity.',
    uses: ['Infrastructure setup', 'Network security', 'Load balancing', 'System integration'],
    keyFeatures: ['Protocol management', 'Traffic routing', 'Network security', 'Performance optimization']
  },
  'Security': {
    description: 'Security in DevOps involves implementing practices and tools to protect applications and infrastructure from threats and vulnerabilities.',
    uses: ['Vulnerability scanning', 'Access control', 'Encryption', 'Compliance management'],
    keyFeatures: ['Threat detection', 'Secure deployment', 'Compliance standards', 'Risk management']
  },
  'Docker Compose': {
    description: 'Docker Compose is a tool for defining and running multi-container Docker applications using a simple YAML configuration file.',
    uses: ['Multi-container applications', 'Local development', 'Testing environments', 'Application orchestration'],
    keyFeatures: ['Simple YAML definition', 'Single command deployment', 'Volume management', 'Network management']
  },
  'Datadog': {
    description: 'Datadog is a SaaS-based monitoring and observability platform that provides real-time visibility into infrastructure and applications.',
    uses: ['Infrastructure monitoring', 'Application performance', 'Log analysis', 'Alert management'],
    keyFeatures: ['Real-time dashboards', 'Distributed tracing', 'Custom metrics', 'Integrations']
  }
}

export default function TechInfo({ tech, onClose }) {
  const info = techDetails[tech] || null

  if (!info) return null

  return (
    <div className="tech-modal-overlay" onClick={onClose}>
      <div className="tech-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{tech}</h2>
          <button className="modal-close" onClick={onClose}>
            <FiX size={24} />
          </button>
        </div>

        <div className="modal-content">
          <div className="tech-description">
            <h3>What is {tech}?</h3>
            <p>{info.description}</p>
          </div>

          <div className="tech-section">
            <h3>Key Uses</h3>
            <ul className="tech-list">
              {info.uses.map((use, idx) => (
                <li key={idx}>{use}</li>
              ))}
            </ul>
          </div>

          <div className="tech-section">
            <h3>Key Features</h3>
            <div className="features-grid">
              {info.keyFeatures.map((feature, idx) => (
                <div key={idx} className="feature-tag">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
