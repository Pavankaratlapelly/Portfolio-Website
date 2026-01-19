import "./Skills.css";

function Skills() {
  return (
    <section id="Skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-list">
          <div className="skill-item">
            <span className="skill-label">Programming Languages</span>
            <span className="skill-value">: Java, JavaScript</span>
          </div>
          
          <div className="skill-item">
            <span className="skill-label">Frontend Technologies</span>
            <span className="skill-value">: HTML5, CSS3, Bootstrap, React.js</span>
          </div>
          
          <div className="skill-item">
            <span className="skill-label">Database</span>
            <span className="skill-value">: SQL, MySQL</span>
          </div>
          
          <div className="skill-item">
            <span className="skill-label">Backend Technologies</span>
            <span className="skill-value">: Spring Boot, Microservices</span>
          </div>
          
          <div className="skill-item">
            <span className="skill-label">Version Control/Tools</span>
            <span className="skill-value">: Git, GitHub, Postman</span>
          </div>
          
          <div className="skill-item">
            <span className="skill-label">IDE</span>
            <span className="skill-value">: Eclipse, VS Code, STS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
