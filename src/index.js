<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Yash Kumar Dubey — DevOps Engineer</title>
    <meta name="description" content="Portfolio of Yash Kumar Dubey — DevOps Engineer, AWS Cloud Practitioner, Linux Administrator, CI/CD Specialist." />
    <link rel="icon" href="pic.jpeg">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">
    <style>
        :root {
            --bg-color: #f4f4f4;
            --sidebar-bg: #2c3e50;
            --card-bg: #ffffff;
            --text-color: #34495e;
            --accent-color: #3498db;
            --muted-color: #7f8c8d;
            --border-radius: 8px;
            --transition: 0.3s ease;
        }

        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
        }

        .sidebar {
            width: 250px;
            background-color: var(--sidebar-bg);
            padding: 20px;
            color: white;
            position: sticky;
            top: 0;
            height: 100vh;
            transition: background-color var(--transition);
        }

        .sidebar h1 {
            font-size: 1.8rem;
            margin: 0;
        }

        .sidebar nav a {
            color: white;
            text-decoration: none;
            padding: 10px 15px;
            display: block;
            border-radius: var(--border-radius);
            transition: background-color var(--transition);
        }

        .sidebar nav a:hover {
            background-color: var(--accent-color);
        }

        .main-content {
            flex: 1;
            padding: 20px;
            max-width: 800px;
            margin: auto;
        }

        .section {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
        }

        .kv-list .label {
            font-weight: bold;
            color: var(--muted-color);
        }

        footer {
            text-align: center;
            padding: 20px;
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
    </style>
</head>
<body>
    <aside class="sidebar">
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
    </aside>
    <main class="main-content">
        <section id="about" class="section">
            <div class="section-title">👋 About Me</div>
            <p><strong>AWS Certified Cloud Practitioner</strong> and experienced <strong>DevOps Engineer</strong> with 2+ years of hands-on experience in Linux system administration, cloud infrastructure, automation, and secure CI/CD pipelines.</p>
            <div class="kv-list">
                <div class="label">Location</div><div>Noida, Uttar Pradesh, India</div>
                <div class="label">Email</div><div><a href="mailto:ydubey020@gmail.com">ydubey020@gmail.com</a></div>
                <div class="label">Phone</div><div><a href="tel:+919935891845">+91 9935891845</a></div>
                <div class="label">LinkedIn</div><div><a target="_blank" rel="noopener" href="https://www.linkedin.com/in/yash-kumar-dubey-4b4926253">yash-kumar-dubey</a></div>
            </div>
        </section>
        <section id="skills" class="section">
            <div class="section-title">🛠️ Technical Skills</div>
            <ul>
                <li>AWS, Azure DevOps</li>
                <li>Jenkins, Git, GitHub Actions</li>
                <li>Docker, Kubernetes</li>
                <li>Python, Bash</li>
                <li>PostgreSQL, MySQL</li>
            </ul>
        </section>
        <section id="experience" class="section">
            <div class="section-title">💼 Professional Experience</div>
            <p>Details about professional experience will go here.</p>
        </section>
        <section id="projects" class="section">
            <div class="section-title">🚀 Key Projects</div>
            <p>Details about key projects will go here.</p>
        </section>
        <section id="education" class="section">
            <div class="section-title">🎓 Education</div>
            <p><strong>Bachelor of Computer Applications (BCA)</strong><br/> Sanskriti University, Mathura • 2020 – 2023</p>
        </section>
        <section id="certs" class="section">
            <div class="section-title">📜 Certifications</div>
            <ul>
                <li>AWS Certified Cloud Practitioner (Valid till Sept 2027)</li>
                <li>Pursuing AWS Solutions Architect – Associate</li>
            </ul>
        </section>
        <section id="testimonials" class="section">
            <div class="section-title">🌟 Testimonials</div>
            <p>Testimonials will go here.</p>
        </section>
        <section id="blog" class="section">
            <div class="section-title">📝 Blog</div>
            <p>Blog posts will go here.</p>
        </section>
        <section id="contact" class="section">
            <div class="section-title">📬 Contact</div>
            <p>Contact details will go here.</p>
        </section>
        <footer>
            © <span id="year"></span> Yash Kumar Dubey • Built with HTML/CSS
        </footer>
    </main>
    <script>
        document.getElementById('year').textContent = new Date().getFullYear();
    </script>
</body>
</html>