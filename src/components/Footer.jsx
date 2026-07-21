import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { siteData } from "../data/site";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          © {currentYear} {siteData.name}. Built with React & Vite.
        </p>

        <div className="footer-links">
          <a
            href={siteData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
          >
            <FaGithub aria-hidden="true" />
          </a>

          <a
            href={`mailto:${siteData.email}`}
            aria-label={`Send an email to ${siteData.name}`}
          >
            <MdEmail aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;