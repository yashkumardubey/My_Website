import React from 'react'
import { FiBriefcase, FiCheck } from 'react-icons/fi'
import './Experience.css'

export default function Experience() {
  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'Speed Sign Technologies Pvt. Ltd.',
      location: 'Noida',
      period: 'Feb 2025 – Present',
      description: 'Architecting and maintaining enterprise-grade CI/CD pipelines, managing Kubernetes infrastructure, and implementing DevSecOps practices.',
      highlights: ['CI/CD', 'Kubernetes', 'EKS', 'PostgreSQL', 'Pgpool-II', 'Ansible', 'DevSecOps', 'Mend', 'Vault', 'Monitoring'],
      achievements: [
        'Architected and maintained enterprise-grade CI/CD pipelines, reducing deployment time by 45%',
        'Deployed and operated Kubernetes (EKS) clusters achieving 99.9% uptime with automated scaling',
        'Implemented PostgreSQL HA/DR using Pgpool-II and Ansible, reducing recovery time by 80%',
        'Integrated DevSecOps pipelines with Mend and Vault',
        'Built centralized monitoring and logging systems for proactive detection',
        'Actively handled production incidents and collaborated with development teams'
      ]
    },
    {
      title: 'Cloud & Linux Engineer',
      company: 'Remiges Technologies Pvt. Ltd.',
      location: 'Mumbai',
      period: 'May 2024 – Feb 2025',
      description: 'Managed AWS infrastructure, built CI/CD pipelines, and implemented Kubernetes clusters with comprehensive monitoring solutions.',
      highlights: ['AWS', 'CI/CD', 'Kubernetes', 'CloudWatch', 'IAM', 'Linux', 'Infrastructure', 'Automation'],
      achievements: [
        'Managed AWS infrastructure ensuring secure, scalable, and cost-efficient environments',
        'Built CI/CD pipelines improving release efficiency by 35%',
        'Implemented Kubernetes clusters, CloudWatch monitoring, and IAM policies',
        'Optimized cloud costs through resource management and automation'
      ]
    },
    {
      title: 'Linux System Administrator',
      company: 'Minitek Systems India Pvt. Ltd.',
      location: 'Mumbai',
      period: 'Oct 2023 – May 2024',
      description: 'Administered Linux and Windows servers, implemented automated backup solutions, and provided proactive infrastructure support.',
      highlights: ['Linux', 'Windows', 'Rsync', 'SCP', 'SSH', 'cron', 'NAS', 'NFS', 'System Admin', 'Backup'],
      achievements: [
        'Administered Linux and Windows servers ensuring 99.9% uptime',
        'Automated backups using Rsync, SCP, SSH, and cron jobs reducing manual workload by 90%',
        'Configured NAS servers with NFS and timestamp-based backups',
        'Provided remote support with 15-minute response SLA'
      ]
    }
  ]

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="exp-timeline">
                <div className="timeline-dot"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="exp-content">
                <h3>{exp.title}</h3>
                <p className="company">{exp.company} | {exp.location}</p>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
                
                <div className="job-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <span key={i} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="achievements-section">
                  <h4>Key Achievements:</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>
                        <FiCheck className="check-icon" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
