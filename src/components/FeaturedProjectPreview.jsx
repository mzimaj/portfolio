import { Link } from "react-router-dom";

function FeaturedProjectPreview() {
  return (
    <section className="home-section featured-project-preview">
      <div className="container home-section-content">
        <p className="section-eyebrow">Featured Project</p>

        <h2 className="section-title">CFA Web Portal</h2>

        <p className="home-section-description">
          A responsive web portal built with React and Bootstrap, focused on
          clean design, reusable components and a simple user experience.
        </p>

        <div className="featured-project-tech" aria-label="Technologies used">
          <span>React</span>
          <span>Bootstrap</span>
          <span>JavaScript</span>
        </div>

        <Link to="/projects" className="featured-project-link">
          View Project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProjectPreview;