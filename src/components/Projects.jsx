import { ExternalLink, ArrowRight, Monitor } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: "United Turf Pro",
    link: "https://united-turf-pro.vercel.app/",
    image: "/images/preview-united-turf.jpg",
    tags: ["React", "GSAP", "Sports"],
    description: "A premium booking platform for Chennai's elite sports turf. Engineered for speed and high-traffic booking sessions.",
    results: ["Built with high-performance GSAP animations", "0.8s Average Page Load Time"],
    imageStyle: "linear-gradient(135deg, #84cc16 0%, #22c55e 100%)"
  },
  {
    title: "Smile Elite Dental",
    link: "https://building-dental.vercel.app/",
    image: "/images/preview-smile-elite.jpg",
    tags: ["React", "Healthcare", "SEO"],
    description: "A high-conversion patient booking engine for a premium dental clinic. Focused on accessibility and local SEO dominance.",
    results: ["40% increase in online bookings", "98/100 Lighthouse Performance Score"],
    imageStyle: "var(--accent-gradient)"
  },
  {
    title: "APEX Gym Platform",
    link: "https://apexgym.co.in",
    image: "/images/preview-apex-gym.jpg",
    tags: ["Next.js", "Fitness", "E-commerce"],
    description: "A dynamic membership platform with a tiered pricing engine and trainer showcase. Built for high-volume lead generation.",
    results: ["2x growth in digital memberships", "Seamless mobile-first booking UX"],
    imageStyle: "linear-gradient(135deg, #10b981 0%, #047857 100%)"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">Featured <span className="text-gradient">Work</span></h2>
          <p className="subtitle">Real projects. Real results.</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card reveal reveal-delay-${index % 2}`}>
              <div 
                className="project-image-placeholder"
                style={{ background: project.imageStyle }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className="project-screenshot"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    Visit Site <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="heading-md mt-2">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-results">
                  <span className="results-label">Results:</span>
                  <ul>
                    {project.results.map((res, i) => (
                      <li key={i}><ArrowRight size={14} className="text-accent" /> {res}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
