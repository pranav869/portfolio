import './About.css';

export default function About() {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="heading-lg">
              Translating ideas into <br />
              <span className="text-gradient">digital reality.</span>
            </h2>
            <p className="subtitle mt-4">
              I'm Pranav, a freelance web developer and designer focused on crafting premium digital experiences. I don't just write code; I solve client problems by engineering scalable platforms that act as powerful growth engines.
            </p>
            <p className="subtitle mt-2">
              My expertise spans across modern frontend technologies including HTML, CSS, JavaScript, and React. With a design-first mindset, I ensure that every pixel serves a purpose, bridging the gap between stunning aesthetics and robust functionality.
            </p>
            
            <div className="stats-container mt-6">
              <div className="stat-box">
                <h3 className="heading-md text-gradient">20+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="stat-box">
                <h3 className="heading-md text-gradient">100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="glass-card visual-card">
               <div className="visual-code">
                 <code>
                   <span style={{color: '#c678dd'}}>const</span> <span style={{color: '#e5c07b'}}>developer</span> = {'{'} <br/>
                   &nbsp;&nbsp;name: <span style={{color: '#98c379'}}>'Pranav'</span>, <br/>
                   &nbsp;&nbsp;role: <span style={{color: '#98c379'}}>'Freelancer'</span>, <br/>
                   &nbsp;&nbsp;tools: [<span style={{color: '#98c379'}}>'React'</span>, <span style={{color: '#98c379'}}>'JS'</span>, <span style={{color: '#98c379'}}>'CSS'</span>], <br/>
                   &nbsp;&nbsp;passion: <span style={{color: '#98c379'}}>'Design & UX'</span> <br/>
                   {'}'};
                 </code>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
