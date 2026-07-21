import { FaGithub } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { siteData } from "../data/site";

function Contact() {
  return (
    <main>
      <section className="page-section contact">
        <div className="container">
          <div className="page-heading">
            <p className="page-eyebrow">Let&apos;s connect</p>
            <h1 className="section-title">Contact</h1>
          </div>

          <p className="contact-intro">
            I am open to frontend development opportunities, collaboration and
            conversations about web development.
          </p>

          <div className="contact-grid">
            <article className="contact-card">
              <MdEmail className="contact-icon" aria-hidden="true" />

              <h2>Email</h2>

              <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
            </article>

            <article className="contact-card">
              <FaGithub className="contact-icon" aria-hidden="true" />

              <h2>GitHub</h2>

              <a
                href={siteData.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View my GitHub profile
              </a>
            </article>

            <article className="contact-card">
              <MdLocationOn className="contact-icon" aria-hidden="true" />

              <h2>Location</h2>

              <p>{siteData.location}</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;