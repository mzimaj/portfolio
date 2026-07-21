function Projects() {
  return (
    <main>
      <section className="page-section projects">
        <div className="container">
          <div className="page-heading">
            <p className="page-eyebrow">What I am building</p>
            <h1 className="section-title">Featured Project</h1>
          </div>

          <article className="project-card">
            <div className="project-header">
              <div>
                <h2>CFA Web Portal</h2>
                <p className="project-status">In Development</p>
              </div>
            </div>

            <p className="project-description">
              A modern web portal currently in development, built with React and
              focused on creating a responsive, intuitive and user-friendly
              experience.
            </p>

            <h3 className="project-subtitle">Technologies</h3>

            <ul className="project-tech">
              <li>React</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>

            <div className="project-note">
              <p>
                The project is currently under active development. Source code
                and a live demo will be available upon completion.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Projects;