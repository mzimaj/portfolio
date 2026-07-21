import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
import { siteData } from "../data/site";
import TechStack from "./TechStack";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">

          <h1 className="hero-title">{siteData.name}</h1>

          <h2 className="hero-role">{siteData.role}</h2>

          <p className="hero-description">{siteData.description}</p>

          <div className="hero-buttons">
            <Link to="/projects" className="button button-primary">
              View Project
            </Link>

            <Link to="/contact" className="button button-secondary">
              Contact Me
            </Link>
          </div>


          <TechStack />
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-border">
            <img
              className="hero-image"
              src={profile}
              alt={`${siteData.name}, ${siteData.role}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;