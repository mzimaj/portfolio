import { Link } from "react-router-dom";

function AboutPreview() {
  return (
    <section className="home-section about-preview">
      <div className="container home-section-content">
        <p className="section-eyebrow">About Me</p>

        <h2 className="section-title">
          Building modern web applications.
        </h2>

        <p className="home-section-description">
          Frontend developer focused on building responsive,
          user-friendly web applications with React, JavaScript, HTML and CSS.
        </p>

        <p className="home-section-description">
          Committed to creating intuitive user experiences through clean, maintainable code and continuous improvement.
        </p>

        <Link to="/about" className="button button-primary">
          Learn More
        </Link>
      </div>
    </section>
  );
}

export default AboutPreview;