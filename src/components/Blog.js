import React, { useEffect } from "react";

const style = `
:root {
  --bg: #f4f4f4;
  --sidebar-bg: #2c3e50;
  --card-bg: #ffffff;
  --text-color: #34495e;
  --accent-color: #2980b9;
  --muted-color: #7f8c8d;
  --shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  --radius: 8px;
  --transition: 0.3s ease;
}

/* Removed global body styling to avoid conflicts. 
   Consider moving this to a global CSS file or using a CSS-in-JS solution for scoping. */

.sidebar {
  width: 250px;
  background: var(--sidebar-bg);
  color: white;
  padding: 20px;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  height: 100vh;
}

.sidebar h1 {
  font-size: 1.8rem;
  margin: 0;
  font-weight: 700;
}

.sidebar nav a {
  display: block;
  color: white;
  padding: 10px;
  text-decoration: none;
  border-radius: var(--radius);
  transition: background var(--transition);
}

.sidebar nav a:hover {
  background: var(--accent-color);
}

.main-content {
  flex: 1;
  padding: 20px;
  max-width: 900px;
  margin: auto;
}

.section {
  background: var(--card-bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 20px;
  margin-bottom: 20px;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--accent-color);
}

.kv-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
}

.kv-list .label {
  font-weight: 700;
  color: var(--muted-color);
}

.btn {
  display: inline-block;
  background: var(--accent-color);
  color: white;
  padding: 10px 15px;
  border-radius: var(--radius);
  text-decoration: none;
  transition: background var(--transition);
}

.btn:hover {
  background: #206494;
}

footer {
  text-align: center;
  margin-top: 20px;
  color: var(--muted-color);
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }

  .main-content {
    padding: 10px;
  }
}
`;

const Blog = () => {
  useEffect(() => {
    // Set the year in the footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
    // Add Roboto font link to head
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    // Add favicon
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "pic.jpeg";
    document.head.appendChild(favicon);

    // Cleanup
    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(favicon);
    };
  }, []);

  return (
    <>
      <style>{style}</style>
      <aside className="sidebar">
        <h1>Yash Kumar Dubey</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certs">Certifications</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="Yash_Kumar_Dubey_Resume.pdf" className="btn" download>
          Download Resume
        </a>
      </aside>
      <main className="main-content">
        <section id="about" className="section">
          <div className="section-title">👋 About Me</div>
          <p>
            <strong>AWS Certified Cloud Practitioner</strong> and experienced <strong>DevOps Engineer</strong> with 2+ years of hands-on experience in Linux system administration, cloud infrastructure, automation, and secure CI/CD pipelines.
          </p>
          <div className="kv-list">
            <div className="label">Location</div>
            <div>Noida, Uttar Pradesh, India</div>
            <div className="label">Email</div>
            <div>
              <a href="mailto:ydubey020@gmail.com">ydubey020@gmail.com</a>
            </div>
            <div className="label">Phone</div>
            <div>
              <a href="tel:+919935891845">+91 9935891845</a>
            </div>
            <div className="label">LinkedIn</div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/yash-kumar-dubey-4b4926253"
              >
                yash-kumar-dubey
              </a>
            </div>
          </div>
        </section>
        <section id="skills" className="section">
          <div className="section-title">🛠️ Technical Skills</div>
          <ul>
            <li>AWS, Azure DevOps</li>
            <li>Jenkins, Git, GitBucket</li>
            <li>Docker, Kubernetes</li>
            <li>PostgreSQL, MySQL</li>
            <li>Python, Bash</li>
          </ul>
        </section>
        <section id="experience" className="section">
          <div className="section-title">💼 Professional Experience</div>
          <p>Details about your professional experience will go here.</p>
        </section>
        <section id="projects" className="section">
          <div className="section-title">🚀 Key Projects</div>
          <p>Details about your key projects will go here.</p>
        </section>
        <section id="education" className="section">
          <div className="section-title">🎓 Education</div>
          <p>
            <strong>Bachelor of Computer Applications (BCA)</strong>
            <br />
            Sanskriti University, Mathura • 2020 – 2023
          </p>
        </section>
        <section id="certs" className="section">
          <div className="section-title">📜 Certifications</div>
          <ul>
            <li>AWS Certified Cloud Practitioner (Valid till Sept 2027)</li>
            <li>Pursuing AWS Solutions Architect – Associate (Udemy)</li>
          </ul>
        </section>
        <section id="testimonials" className="section">
          <div className="section-title">🌟 Testimonials</div>
          <p>Testimonials will go here.</p>
        </section>
        <section id="blog" className="section">
          <div className="section-title">📝 Blog</div>
          <p>Blog posts will go here.</p>
        </section>
        <section id="contact" className="section">
          <div className="section-title">📬 Contact</div>
          <p>You can reach me at:</p>
          <a className="btn" href="mailto:ydubey020@gmail.com">
            Email Me
          </a>
        </section>
        <footer>
          © <span id="year"></span> Yash Kumar Dubey • Built with HTML/CSS/JS
        </footer>
      </main>
    </>
  );
};

export default Blog;