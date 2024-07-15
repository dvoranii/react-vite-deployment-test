import OGCarouselImg1 from "/assets/projects/OG-gallery-img(1).png";
import OGCarouselImg2 from "/assets/projects/OG-gallery-img(2).png";
import OGCarouselImg3 from "/assets/projects/OG-gallery-img(3).png";

import CGLCarouselThumb from "/assets/projects/cgl-thumb-bg.png";
import CGLCarouselImg2 from "/assets/projects/CGL-modal-img-02.png";
import CGLCarouselImg3 from "/assets/projects/CGL-modal-img-03.png";

import OGModalThumb from "/assets/projects/banner-img.webp";
import OGCarouselThumb from "/assets/projects/og-carousel-thumb.png";
import CGLModalThumb from "/assets/projects/cgl-thumbnail.png";

import PersonalProjectsThumb from "/assets/projects/personal-projects-thumb.png";
import OutpostThumb from "/assets/projects/outpost-thumb.png";
import MyLogo from "/assets/nav/01-headerLogo.avif";

import OPGalleryImg02 from "/assets/projects/op-bg-02.png";
import OPGalleryImg03 from "/assets/projects/op-bg-03.png";
import OPGalleryImg1 from "/assets/projects/op-carousel-thumb.png";

import IldiDevCarouselThumb from "/assets/projects/ildidev-thumb.png";

import PersonalProjectsCarouselImg from "/assets/projects/personal-projects-thumb01.png";

const projects = {
  project_1: {
    id: 1,
    title: `OG Creations Recording Studio Site`,
    thumbnail: OGModalThumb,
    techStack: [
      "Angular",
      "Typescript",
      "CSS",
      "HTML",
      "Firebase",
      "Node",
      "Photoshop",
    ],
    projectDescription:
      "I developed and designed the inaugural website for OG Creations Recording Studio, introducing a new digital channel for the studio. The site features a straightforward online sales funnel, contact forms integrated with Google Firebase, a bespoke design tailored to the studio's brand, and a functional UI ensuring user-friendliness across devices. This project highlights my proficiency in both development and design",
    galleryImages: [
      OGCarouselThumb,
      OGCarouselImg1,
      OGCarouselImg2,
      OGCarouselImg3,
    ],
    githubURL: "https://github.com/dvoranii/og-creations-website",
    liveDemoURL: "https://www.ogcreations.ca/",
  },
  project_2: {
    id: 2,
    title: `CGL Website`,
    thumbnail: CGLModalThumb,
    techStack: [
      "JavaScript",
      "THREE",
      "CSS",
      "HTML",
      "Firebase",
      "Node",
      "Photoshop",
    ],
    projectDescription: `I led the development of the website for Canadian Global Logistics® Inc., transitioning it to a client-side rendered vanilla-js MPA hosted on DigitalOcean. The site features an advanced, responsive design and a 3D spinning globe component created with Three.js, highlighting my proficiency in integrating interactive visual elements. The backend is powered by Node.js and Express, with Firestore for database management. The deployment includes an Nginx web server on a Linux/Debian instance, ensuring optimal performance and security. Detailed forms for quotes and contacts demonstrate my ability to create functional, user-friendly web solutions for the logistics sector.`,
    galleryImages: [CGLCarouselThumb, CGLCarouselImg2, CGLCarouselImg3],
    githubURL: "https://github.com/dvoranii/CGL-MPA-Monorepo",
    liveDemoURL: "https://cglwebsitetest.xyz",
  },
  project_3: {
    id: 3,
    title: "Outpost 379 Marketing Agency",
    thumbnail: OutpostThumb,
    techStack: ["JavaScript", "HTML", "CSS"],
    projectDescription:
      "At Outpost379, I worked closely with a team to manage and update the company's website, ensuring it was responsive and user-friendly. My role in these projects highlights my ability to collaborate effectively and maintain high-quality digital platforms.",
    galleryImages: [OPGalleryImg1, OPGalleryImg02, OPGalleryImg03],
    githubURL: "N/A",
    liveDemoURL: "https://outpost379.com/",
  },
  project_4: {
    id: 4,
    title: "Personal Projects Website",
    thumbnail: PersonalProjectsThumb,
    techStack: ["React", "Vite", "JavaScript", "CSS", "HTML"],
    projectDescription:
      "I built a website to host and display my personal projects. This site gives a glimpse into the different projects I've worked on, showing my range as a developer. It's designed to be easy for visitors to navigate and see my work in a clear and straightforward way.",
    galleryImages: [PersonalProjectsCarouselImg],
    githubURL: "https://github.com/dvoranii/personal-projects-site",
    liveDemoURL: "https://personal-projects-site.vercel.app/",
  },
  project_5: {
    id: 5,
    title: "Bonus: website metadata",
    thumbnail: MyLogo,
    techStack: [
      "React",
      "JavaScript",
      "Vite",
      "Node",
      "Firebase",
      "HTML",
      "CSS",
    ],
    galleryImages: [IldiDevCarouselThumb],
    githubURL: "https://github.com/dvoranii/react-vite-deployment-test",
    projectDescription:
      "I designed and developed this portfolio site, starting with a Figma design and bringing it to life with modern web technologies. It's a Progressive Web App for improved offline access and performance. The site features an integrated service worker for optimal loading and an automated script for regular updates.",
    liveDemoURL: "N/A",
    figmaLink:
      "https://www.figma.com/file/LkeTEUFRxx2N3XbVw7KedA/IlDIDEV?type=design&node-id=0-1&mode=design",
  },
};
export default projects;
