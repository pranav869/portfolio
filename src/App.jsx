import './App.css';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const skills = {
  Languages: ['C++', 'Python', 'JavaScript'],
  Web: ['HTML', 'CSS', 'React.js', 'Node.js'],
  'Backend & APIs': ['RESTful APIs', 'OAuth 2.0', 'JSON'],
  'Cloud & DevOps': ['Microsoft Azure', 'GitHub Actions (CI/CD)'],
  'ML / AI': ['Supervised Learning', 'CNNs', 'STT', 'TTS'],
  'Core CS': ['Computer Networks', 'OS', 'DBMS', 'OOP', 'DSA'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux'],
  Databases: ['MySQL', 'MongoDB (basics)'],
};

const experience = [
  {
    role: 'Web Developer',
    org: 'CodeChef VIT Chennai Chapter',
    period: 'Oct 2025 – Present',
    location: 'Chennai, India',
    points: [
      'Built and maintained responsive React.js components and pages for club events, improving UI consistency across 5+ events and reducing visual regressions.',
      'Collaborated with a 6-member technical team using Git pull-request workflows with code reviews, ensuring clean, maintainable, and version-controlled codebases.',
      'Drove UI/UX improvements and implemented performance optimizations including lazy loading and component memoization, reducing reported frontend bugs by 30%.',
    ],
  },
];

const projects = [
  {
    name: 'Finalon',
    tagline: 'Task Manager with Google Calendar Sync',
    stack: 'React.js, Node.js, OAuth 2.0, REST APIs',
    year: '2025',
    points: [
      'Built a full-stack productivity platform integrating Google Calendar via OAuth 2.0, enabling real-time bidirectional task synchronization across 100+ calendar events and tasks across devices.',
      'Designed RESTful backend architecture with async request handling and in-memory caching, reducing API latency by 30–40%.',
      'Implemented priority-based filtering, tag categorization, and deadline reminder pipelines within a responsive React UI supporting desktop and mobile clients, handling multiple concurrent task updates.',
    ],
  },
  {
    name: 'AI Doctor',
    tagline: 'Disease prediction & medical image analysis',
    stack: 'Python, Scikit-learn, TensorFlow, CNNs, Flask',
    year: '2025',
    points: [
      'Engineered a disease prediction system using supervised ML models trained on symptom datasets, achieving 85%+ accuracy across 40+ disease categories.',
      'Built a CNN-based medical image analysis module for detecting abnormalities in MRI and CT scans, with modular architecture separating inference, image processing, and API layers.',
      'Exposed backend functionality as a REST API using Flask, enabling seamless frontend integration and future scalability.',
    ],
  },
  {
    name: 'Task Management Web App',
    tagline: 'Full-stack productivity platform',
    stack: 'React.js, Node.js, REST APIs',
    year: '2025',
    points: [
      'Built a full-stack productivity platform using React and Node.js with REST APIs and comprehensive task management features.',
    ],
  },
  {
    name: 'AI Health Assistant Website',
    tagline: 'Web app with ML-powered predictions',
    stack: 'Flask, Machine Learning, REST API',
    year: '2025',
    points: [
      'Developed a web application integrating machine learning predictions through a Flask API backend for health-related insights.',
    ],
  },
  {
    name: 'Portfolio Website',
    tagline: 'Responsive developer portfolio',
    stack: 'React, HTML, CSS, Vite',
    year: '2025',
    points: [
      'Designed and deployed a responsive developer portfolio showcasing projects and technical skills with modern UI and smooth navigation.',
    ],
  },
  {
    name: 'Restaurant Business Website',
    tagline: 'Multi-page restaurant site',
    stack: 'HTML, CSS, JavaScript',
    year: '2025',
    points: [
      'Created a responsive multi-page website with modern UI and mobile optimization for a restaurant business.',
    ],
  },
  {
    name: 'Startup Landing Page',
    tagline: 'High-conversion landing page',
    stack: 'HTML, CSS, JavaScript',
    year: '2025',
    points: [
      'Developed a high-conversion landing page with responsive design and optimized performance for a startup.',
    ],
  },
  {
    name: 'Blog / Content Website',
    tagline: 'Dynamic blog platform',
    stack: 'React / Node, Database integration',
    year: '2025',
    points: [
      'Built a dynamic blog platform with database integration and a user-friendly interface for content management and display.',
    ],
  },
];

const achievements = [
  '4th place, Vortex Hackathon — Built an accessibility-first healthcare web app bridging language and literacy barriers for 100+ competing teams',
  'Supervised Machine Learning & Advanced Learning Algorithms — Stanford University via Coursera (Andrew Ng)',
  'JavaScript Certification — GUVI',
  'C++ Beginner to Advanced — Udemy',
  'Microsoft Azure Fundamentals (AZ-900) — In Progress',
];

function App() {
  return (
    <>
      <nav className="nav">
        <a href="#" className="nav-brand">Pranav Eashwaran G</a>
        <ul className="nav-links">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <header className="hero" id="hero">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Pranav Eashwaran G</h1>
        <p className="hero-tagline">
          CS (AI & ML) @ VIT Chennai · Full-stack · REST APIs · DSA · LeetCode 1407
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Get in touch</a>
          <a href="#projects" className="btn btn-secondary">View projects</a>
        </div>
      </header>

      <section id="about" className="section">
        <h2 className="section-title">About</h2>
        <p className="about-text">
          Computer Science (AI & ML) student at VIT Chennai with strong foundations in Data Structures and Algorithms (110+ problems solved, LeetCode rating 1407). Experienced in designing scalable REST APIs and full-stack applications using C++, Python, React, Node.js, and Flask. Interested in backend systems, distributed architectures, and performance optimization with hands-on exposure to Azure and CI/CD pipelines.
        </p>
      </section>

      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-card">
              <h3 className="skill-category">{category}</h3>
              <ul className="skill-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        {experience.map((job) => (
          <article key={job.org} className="card job-card">
            <div className="job-header">
              <div>
                <h3 className="job-role">{job.role}</h3>
                <p className="job-org">{job.org}</p>
              </div>
              <span className="job-period">{job.period}</span>
            </div>
            <p className="job-location">{job.location}</p>
            <ul className="job-points">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        {projects.map((proj) => (
          <article key={proj.name} className="card project-card">
            <div className="project-header">
              <h3 className="project-name">{proj.name}</h3>
              <span className="project-year">{proj.year}</span>
            </div>
            <p className="project-tagline">{proj.tagline}</p>
            <p className="project-stack">{proj.stack}</p>
            <ul className="project-points">
              {proj.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section id="achievements" className="section">
        <h2 className="section-title">Achievements & Certifications</h2>
        <ul className="achievements-list">
          {achievements.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <article className="card education-card">
          <h3 className="edu-school">Vellore Institute of Technology, Chennai</h3>
          <p className="edu-degree">B.Tech, Computer Science and Engineering (AI & ML)</p>
          <p className="edu-period">2024 – 2028 · Expected: May 2028</p>
          <p className="edu-coursework">
            Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Machine Learning, Discrete Mathematics
          </p>
        </article>
      </section>

      <section id="contact" className="section contact-section">
        <h2 className="section-title">Contact</h2>
        <p className="contact-text">Open to internships and collaboration. Reach out via email or connect on LinkedIn.</p>
        <div className="contact-links">
          <a href="mailto:mainsjee237@gmail.com" className="contact-link">mainsjee237@gmail.com</a>
          <a href="https://www.linkedin.com/in/pranav-eashwaran-g-b5b105320" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          <a href="https://github.com/pranav869" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Pranav Eashwaran G. Built with React + Vite.</p>
      </footer>
    </>
  );
}

export default App;
