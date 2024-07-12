/* eslint-disable react/prop-types */
import "./styles.css";
import GithubLogo from "/assets/icons/logo-github.svg";
import WebsiteIcon from "/assets/icons/website-icon.png";
import LinkedinLogo from "/assets/icons/01-logo-linkedin.svg";

function ButtonsComponent({ gitRepo, siteURL, linkedInURL, context }) {
  const renderButton = (url, icon, label, isDisabled) => (
    <div className={`btn__wrapper ${context}`}>
      <a
        href={isDisabled ? null : url}
        target="_blank"
        rel="noopener noreferrer"
        className={isDisabled ? "disabled-button" : ""}
      >
        <button disabled={isDisabled}>
          <img src={icon} alt={`${label} icon`} />
          {label}
        </button>
      </a>
    </div>
  );

  return (
    <div className="btns--wrapper__outer">
      <div className="btns--wrapper__inner">
        {gitRepo &&
          renderButton(
            gitRepo,
            GithubLogo,
            context === "about" ? "GitHub" : "Repo",
            gitRepo === "N/A"
          )}
        {siteURL &&
          renderButton(siteURL, WebsiteIcon, "Live Site", siteURL === "N/A")}
        {linkedInURL &&
          renderButton(
            linkedInURL,
            LinkedinLogo,
            "LinkedIn",
            linkedInURL === "N/A"
          )}
      </div>
    </div>
  );
}

export default ButtonsComponent;
