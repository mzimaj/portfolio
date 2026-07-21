import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { siteData } from "../data/site";

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      <a
        href={siteData.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Marko's GitHub profile"
      >
        <FaGithub aria-hidden="true" />
        <span>GitHub</span>
      </a>

      <a
        href={`mailto:${siteData.email}`}
        aria-label={`Send an email to ${siteData.name}`}
      >
        <MdEmail aria-hidden="true" />
        <span>Email</span>
      </a>
    </div>
  );
}

export default SocialLinks;