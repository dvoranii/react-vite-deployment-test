import "./styles.css";
import ThumbnailOverlayComponent from "./ThumbnailOverlayComponent";

/* eslint-disable react/prop-types */
function ProjectThumbnailComponent({ project, onClick }) {
  return (
    <div
      className={`project_${project.id}-thumbnail--wrapper thumbnail--wrapper`}
      onClick={() => onClick(project)}
    >
      <ThumbnailOverlayComponent />

      <div className={`project_${project.id}-thumbnail thumbnail`}>
        <img
          src={project.thumbnail}
          loading="lazy"
          alt={`${project.title} thumbnail`}
        />
      </div>
    </div>
  );
}

export default ProjectThumbnailComponent;
