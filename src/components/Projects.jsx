import "./Projects.css";
import { FaGithub, FaFolder, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section id="Projects" className="projects-section">
      <div className="projects-header">
        <h2 className="section-title">Projects</h2>
        <a
          href="https://github.com/Pavankaratlapelly?tab=repositories"
          className="view-all"
          target="_blank"
          rel="noreferrer"
        >
          <FaExternalLinkAlt /> View Complete List
        </a>
      </div>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <div className="card-header">
            <FaFolder className="folder-icon" />
            <FaGithub className="github-icon" />
          </div>
          <h3>Employee Management System</h3>
          <p>
            A full-stack application to manage employee records including
            registration, payroll, role assignment, authentication, and
            reporting with complete CRUD operations.
          </p>
          <div className="tech-stack">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>MySQL</span>
            <span>React</span>
            <span>REST API</span>
            <span>Bootstrap</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="card-header">
            <FaFolder className="folder-icon" />
            <FaGithub className="github-icon" />
          </div>
          <h3>Family Website</h3>
          <p>
            A responsive heritage website showcasing family generations
            through photos, timelines, and events with smooth animations
            and an accessible interface.
          </p>
          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Bootstrap</span>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="card-header">
            <FaFolder className="folder-icon" />
            <FaGithub className="github-icon" />
          </div>
          <h3>Portfolio Website</h3>
          <p>
            A modern personal portfolio featuring timelines, animations,
            and project showcases with a clean responsive design.
          </p>
          <div className="tech-stack">
            <span>React.js</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <div className="card-header">
            <FaFolder className="folder-icon" />
            <FaGithub className="github-icon" />
          </div>
          <h3>Landing Page</h3>
          <p>
            A high-converting landing page featuring hero sections,
            call-to-action animations, and optimized UI components.
          </p>
          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
