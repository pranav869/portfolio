import { MonitorSmartphone, LayoutGrid, Server, Database, PenTool, FastForward } from 'lucide-react';
import './Skills.css';

const skills = [
  { name: "Frontend Development", icon: <MonitorSmartphone size={24} />, level: 95 },
  { name: "UI/UX Design", icon: <PenTool size={24} />, level: 90 },
  { name: "React Ecosystem", icon: <LayoutGrid size={24} />, level: 92 },
  { name: "Backend Integration", icon: <Server size={24} />, level: 85 },
  { name: "Performance Optimization", icon: <FastForward size={24} />, level: 98 },
  { name: "Database Schema", icon: <Database size={24} />, level: 80 }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">Core <span className="text-gradient">Competencies</span></h2>
          <p className="subtitle">Technologies and disciplines I excel at.</p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card glass-card">
              <div className="skill-header">
                <div className="skill-icon text-accent">{skill.icon}</div>
                <h3 className="heading-md" style={{fontSize: '1.2rem'}}>{skill.name}</h3>
              </div>
              <div className="skill-bar-container">
                <div className="skill-progress-bg">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
