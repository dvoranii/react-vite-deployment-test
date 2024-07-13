import "./styles.css";

const ICON_MAP = {
  React: "/assets/skills/react-logo.webp",
  Angular: "/assets/skills/angular-modal.png",
  JavaScript: "/assets/skills/JS-skills-Card-img.jpg",
  Typescript: "/assets/skills/Typescript_logo.webp",
  HTML: "/assets/skills/html-1.svg",
  CSS: "/assets/skills/css-3.svg",
  Node: "/assets/skills/node.png",
  Firebase: "/assets/skills/firebase.png",
  Photoshop: "/assets/skills/Adobe-Photoshop-Logo.png",
  THREE: "/assets/skills/ThreeJS_Icon.svg",
  Vite: "/assets/skills/Vitejs-logo.svg",
};

/* eslint-disable react/prop-types */
function TechIconsComponent({ icons }) {
  return (
    <div className="icons-wrapper-inner">
      {icons.map((icon) => (
        <img
          className={`modal-icon ${icon}`}
          key={icon}
          src={ICON_MAP[icon]}
          alt={icon}
          title={icon}
        />
      ))}
    </div>
  );
}

export default TechIconsComponent;
