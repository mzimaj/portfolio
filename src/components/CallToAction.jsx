import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="home-section cta">
      <div className="container home-section-content">
        <p className="section-eyebrow">Let's Connect</p>

        <h2 className="section-title">
          Ready to build something great together?
        </h2>

        <p className="home-section-description">
          Looking to contribute, grow as a developer, and build modern web applications.
        </p>

        <Link to="/contact" className="button button-primary">
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;