import { siteData } from "../data/site";

function About() {
  return (
    <main>
      <section className="page-section about">
        <div className="container">
          <div className="page-heading">
            <p className="page-eyebrow">Get to know me</p>
            <h1 className="section-title">About Me</h1>
          </div>

          <div className="about-content">
            <aside className="about-card">
              <h2>Profile</h2>

              <p>
                <strong>Name</strong>
                {siteData.name}
              </p>

              <p>
                <strong>Role</strong>
                {siteData.role}
              </p>

              <p>
                <strong>Location</strong>
                {siteData.location}
              </p>

              <p>
                <strong>Focus</strong>
                React & Frontend Development
              </p>
            </aside>

            <div className="about-text">
              <p>
                Building modern, responsive and user-friendly web applications
                is what motivates me as a frontend developer. Strong
                problem-solving skills, attention to detail and an eagerness to
                learn help me build clean, maintainable solutions.
              </p>

              <p>
                Continuously improving my frontend development skills through personal projects while exploring modern technologies and solving real-world challenges.              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;