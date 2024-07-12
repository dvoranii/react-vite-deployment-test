import "./styles.css";
import GithubLogo from "/assets/icons/logo-github.svg";
import LinkedInLogo from "/assets/icons/01-logo-linkedin.svg";
import CodepenLogo from "/assets/icons/logo-codepen.svg";

function NavSocialsComponent() {
  return (
    <li>
      <ul className="socials--list">
        <li>
          <a
            href="https://www.linkedin.com/in/ildi-dvorani-a04452210/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="linkedin logo"
              className={`social--logo linkedin`}
              src={LinkedInLogo}
              loading="lazy"
            ></img>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/dvoranii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={`social--logo github`}
              alt="github logo"
              src={GithubLogo}
              loading="lazy"
            ></img>
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/dvoranii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="codepen logo"
              className={`social--logo codepen`}
              src={CodepenLogo}
              loading="lazy"
            ></img>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default NavSocialsComponent;
