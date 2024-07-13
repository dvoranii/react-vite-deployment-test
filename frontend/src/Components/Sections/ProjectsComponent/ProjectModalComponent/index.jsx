import "./styles.css";
import TechIconsComponent from "./TechIconsComponent";
import ButtonsComponent from "@reusable/ButtonsComponent";
import FigmaLogo from "/assets/skills/figma-logo.png";

/* eslint-disable react/prop-types */
function ProjectModalComponent({
  isOpen,
  onClose,
  isLastProject,
  figmaLink,
  children,
  techStack,
  title,
  description,
  gitRepo,
  siteURL,
}) {
  if (!isOpen) return null;

  return (
    <div className={`modal-backdrop`} onClick={onClose}>
      <div
        className={`modal-content ${isLastProject ? "last-project" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={`close--btn`} onClick={onClose}>
          ×
        </button>
        <div className="img-wrapper">{children}</div>

        <div className={`modal-info--wrapper`}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={`tech-icons--wrapper`}>
            {techStack && <TechIconsComponent icons={techStack} />}
          </div>

          {figmaLink && (
            <div className="figmaWrapper">
              <button>
                <img
                  src={FigmaLogo}
                  className="figma-btn-logo"
                  alt="Figma Logo"
                />
                <a
                  href={figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="figma-link"
                >
                  View Figma Design
                </a>
              </button>
            </div>
          )}
          <ButtonsComponent
            gitRepo={gitRepo}
            siteURL={siteURL}
            figmaLink={figmaLink}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectModalComponent;
