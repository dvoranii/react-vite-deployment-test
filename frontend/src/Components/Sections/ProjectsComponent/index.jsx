import "./styles.css";
import { useState } from "react";
import TitleComponent from "@reusable/TitleComponent/index.jsx";
import ProjectModalComponent from "./ProjectModalComponent/index.jsx";
import ImageCarouselComponent from "./ProjectModalComponent/ImageCarouselComponent/index.jsx";
import projects from "./projectData.js";
import ProjectThumbnailComponent from "./ProjectThumbnailComponent/index.jsx";

function ProjectsComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleThumbnailClick = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  return (
    <div id="projects" className={`projects--wrapper container`}>
      <TitleComponent
        className="projects-title"
        textContent={"My Projects"}
        classTitle="projects-title"
      ></TitleComponent>

      <div className="projects--thumbnails__container-outer">
        {Object.values(projects)
          .filter((_, index) => index <= 1)
          .map((project) => (
            <ProjectThumbnailComponent
              key={project.id}
              project={project}
              onClick={handleThumbnailClick}
            />
          ))}

        <div className="sub-grid">
          {Object.values(projects)
            .filter((_, index) => index > 1)
            .map((project) => (
              <ProjectThumbnailComponent
                key={project.id}
                project={project}
                onClick={handleThumbnailClick}
              />
            ))}
        </div>
      </div>

      <ProjectModalComponent
        className="modal-component"
        isOpen={isModalOpen}
        isLastProject={currentProject?.id === 5}
        onClose={() => {
          setIsModalOpen(false);
          setCurrentProject(null);
        }}
        techStack={currentProject?.techStack}
        id={currentProject?.id}
        title={currentProject?.title}
        description={currentProject?.projectDescription}
        gitRepo={currentProject?.githubURL}
        siteURL={currentProject?.liveDemoURL}
        figmaLink={currentProject?.figmaLink}
      >
        {currentProject && (
          <ImageCarouselComponent
            className="carousel"
            galleryImages={currentProject.galleryImages}
          />
        )}
      </ProjectModalComponent>
    </div>
  );
}

export default ProjectsComponent;
