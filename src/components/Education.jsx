import "./Education.css";

function Education() {
  return (
    <section id="Education" className="education-section">
      <h2 className="section-title">Education & Certifications</h2>

      <div className="timeline">

        {/* ===== LEFT : EDUCATION ===== */}
        <div className="timeline-column">
          <h3 className="column-title">Education</h3>

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div className="timeline-card">
              <span className="timeline-year">2021 – 2025</span>
              <h4>Bachelor of Technology    &nbsp; &nbsp;( CSE )</h4>
              <p>
                Jayamukhi Institute of Technological Sciences <br />
                
                CGPA: <strong>8.09</strong>
              </p>
            </div>
          </div>

          

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div className="timeline-card">
              <span className="timeline-year">2019 – 2021</span>
              <h4>Intermediate  &nbsp;(MPC)</h4>
              <p>
                Vidwan Junior College <br />
                Percentage: <strong>88%</strong>
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div className="timeline-card">
              <span className="timeline-year">2019</span>
              <h4>High School</h4>
              <p>
                St. Joseph’s High School <br />
                GPA: <strong>9.3</strong>
              </p>
            </div>
          </div>
          
        </div>

        {/* ===== CENTER LINE ===== */}
        <div className="timeline-line"></div>

        {/* ===== RIGHT : CERTIFICATIONS ===== */}
        <div className="timeline-column">
          <h3 className="column-title">Certifications & Training</h3>

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div className="timeline-card">
              <span className="timeline-year">2025</span>
              <h4>Java Full Stack Development</h4>
              <p>
                IHUB – Quality Thought <br />
                Java, Spring Boot, REST APIs, Full Stack Projects
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div className="timeline-card">
              <span className="timeline-year">2025</span>
              <h4>GenAI-Powered Data Analytics</h4>
              <p>
                TATA (Forage) <br />
                Job simulation using analytics & GenAI
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div className="timeline-card">
              <span className="timeline-year">2024</span>
              <h4>Introduction to Artificial Intelligence</h4>
              <p>
                Infosys Springboard <br />
                AI fundamentals & real-world applications
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;
