import "./Home.css";
import profile from "../assets/profile.png";
import { FaWhatsapp, FaLinkedinIn, FaGithub,FaPhone } from "react-icons/fa";

function Home() {
  return (
    <section id="Home" className="home-section">
      <div className="container home-container">

        {/* LEFT SIDE */}
        <div className="home-text">

          <h1 className="home-name">
            KARATLAPELLY <span>PAVAN</span>
          </h1>

          {/* REQUIRED EFFECT TEXT */}
          <h2 className="home-role">
            <span className="outline-text">
              Java Full Stack Developer
            </span>
          </h2>

          {/* EXISTING DESCRIPTION (RESTORED) */}
          <p className="home-desc">
            Motivated Computer Science graduate seeking a Java Developer position,
            equipped with strong knowledge of Java, object-oriented programming,
            Spring Boot, and RESTful services. Driven to develop scalable and
            reliable applications while continuously enhancing skills and
            contributing to innovative, real-world projects.
          </p>
        
          {/* REQUIRED BUTTON */}
          <a href="#ContactUs" className="talk-btn">
            Contact Me
          </a>

          {/* REQUIRED ICONS */}
          
          <div className="social-icons" >
             <a href="tel:+918099215164" target="_blank" rel="noreferrer">
              <FaPhone />
            </a>
            <a href="https://wa.me/918099215164" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://linkedin.com/in/pavan-karatlapelly" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Pavankaratlapelly" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
           

            
          </div>
          
        
        </div>
        

        {/* RIGHT SIDE PHOTO (UNCHANGED) */}
        <div className="home-image">
          <div className="image-glow">
            <img src={profile} alt="Profile" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
