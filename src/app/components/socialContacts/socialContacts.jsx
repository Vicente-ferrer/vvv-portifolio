import { GitHubIcon } from "../icons/gitHub";
import { LinkedInIcon } from "../icons/linkedin";

import "./socialContacts.css";

function socialContacts({ linkedInLink, githubLink }) {
  return (
    <div className="social-contacts">
      <a href={linkedInLink}>
        <LinkedInIcon />
      </a>
      <a href={githubLink}>
        <GitHubIcon />
      </a>
    </div>
  );
}

export default socialContacts;
