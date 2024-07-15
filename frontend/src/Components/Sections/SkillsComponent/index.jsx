import "./styles.css";
import TitleComponent from "../../Reusable/TitleComponent";
import JSLogo from "/assets/skills/JS-skills-Card-img.jpg";
import TSLogo from "/assets/skills/Typescript_logo.webp";
import ViteLogo from "/assets/skills/Vitejs-logo.svg";
import CSSLogo from "/assets/skills/css-3.svg";
import SASSLogo from "/assets/skills/sass-logo.png";
import HTMLLogo from "/assets/skills/html-1.svg";
import NodeLogo from "/assets/skills/node.png";
import ReactLogo from "/assets/skills/react-logo.webp";
import GoogleFBLogo from "/assets/skills/firebase.png";
import PhotoshopLogo from "/assets/skills/Adobe-Photoshop-Logo.png";
import SQLLogo from "/assets/skills/sql-logo.webp";
import LinuxLogo from "/assets/skills/linux.avif";
import GitLogo from "/assets/skills/git-logo.png";
import WebpackLogo from "/assets/skills/webpack.webp";

import Tilt from "react-vanilla-tilt";

function SkillsComponent() {
  return (
    <div id="skills">
      <TitleComponent
        textContent={"My Skills"}
        classTitle={"skills-title"}
      ></TitleComponent>
      <div className={`skills--wrapper__outer`}>
        <div className={`skills--wrapper__inner container`}>
          <Tilt className="tilt">
            <div className={`skill-card skill--1`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>JavaScript/Typescript</h4>
                <div className="skill-logo-container">
                  <img
                    src={JSLogo}
                    loading="lazy"
                    alt="javascript logo icon"
                    title="JavaScript"
                    className={`js-skill-logo`}
                  ></img>
                  <img
                    src={TSLogo}
                    alt="Typescript Logo"
                    title="TypeScript"
                    className={`ts-skill-logo`}
                  />
                </div>
              </div>
              <p>
                With proficiency in JavaScript and TypeScript, I develop dynamic
                and interactive web applications. By applying TypeScript&apos;s
                type safety, I enhance code reliability and maintainability,
                ensuring robust and scalable solutions.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--2`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>CSS/SASS</h4>
                <div className="skill-logo-container">
                  <img
                    src={CSSLogo}
                    loading="lazy"
                    alt="css logo icon"
                    title="CSS"
                    className={`css-skill-logo`}
                  ></img>
                  <img
                    src={SASSLogo}
                    alt="SASS Logo"
                    title="SASS"
                    className={`sass-skill-logo`}
                  />
                </div>
              </div>

              <p>
                Creating visually captivating and responsive designs is my
                specialty, using advanced CSS techniques and the power of SASS
                for more complex implementations. I focus on efficient and
                maintainable styling to ensure optimal performance and
                consistent design aesthetics. This, paired with an understanding
                of web design fundamentals, allows me to streamline the creation
                of intuitive and visually appealing user interfaces.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--3`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>HTML</h4>
                <img
                  src={HTMLLogo}
                  loading="lazy"
                  alt="html logo icon"
                  title="HTML"
                  className={`html-skill-logo`}
                ></img>
              </div>
              <p>
                Experienced in crafting SEO-optimized HTML code compliant with
                AODA/WCAG 2.0 standards. This includes the use of React/JSX,
                template engines like EJS and Pug, and creating responsive HTML
                emails and banner ads to enhance user engagement and
                accessibility.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--4`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>Vite</h4>
                <img
                  src={ViteLogo}
                  loading="lazy"
                  alt="Vite logo"
                  title="Vite"
                ></img>
              </div>
              <p>
                Enhancing web development efficiency with Vite&apos;s ultra-fast
                build system, I leverage its native ES module support for an
                improved developer experience and accelerated hot module
                replacement. My proficiency with Vite enables me to deliver
                rapid, optimized development workflows tailored to modern web
                applications.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--5`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>Webpack</h4>
                <img
                  src={WebpackLogo}
                  loading="lazy"
                  alt="webpack logo icon"
                  title="Webpack"
                ></img>
              </div>
              <p>
                Optimizing build processes and managing dependencies efficiently
                with Webpack, I leverage its capabilities to bundle JavaScript
                applications seamlessly. Utilizing Webpack&apos;s powerful
                features such as code splitting and asset management, I create
                robust and maintainable web applications.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--6`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>React</h4>
                <img
                  src={ReactLogo}
                  loading="lazy"
                  alt="react logo icon"
                  title="React"
                ></img>
              </div>
              <p>
                Using React to its fullest potential, I develop modular
                component-driven UI&apos;s. Through the use of hooks, context,
                and advanced features, I create dynamic and responsive web
                applications. With an adept understanding of React&apos;s
                architecture, I am able to continually refine component
                granularity for optimal performance, maintainability, and
                scalability.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--7`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>SQL</h4>
                <img
                  src={SQLLogo}
                  loading="lazy"
                  alt="SQL Logo"
                  title="SQL"
                  className={`sql-skill-logo`}
                ></img>
              </div>
              <p>
                Familiar with the foundations of SQL to manage and interact with
                relational databases. Capable of writing basic to intermediate
                queries and ensuring data consistency.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--8`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>Node</h4>
                <img
                  src={NodeLogo}
                  loading="lazy"
                  alt="node logo icon"
                  title="Node"
                ></img>
              </div>
              <p>
                Utilizing Node.js for server-side operations, I integrate
                middleware and craft scalable backend services. Additionally, I
                develop powerful command-line interface (CLI) tools, ensuring
                smooth and efficient data flows in web applications.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--9`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>Google Firebase</h4>
                <img
                  src={GoogleFBLogo}
                  loading="lazy"
                  alt="google firebase logo icon"
                  title="Firebase"
                ></img>
              </div>
              <p>
                Streamlining web application infrastructure and deployment with
                Google Firebase, I take advantage of its quick setup, intuitive
                UI, and comprehensive SDK. Implementing real-time databases and
                user authentication ensures robust and scalable solutions.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--10`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>Linux</h4>
                <img
                  src={LinuxLogo}
                  loading="lazy"
                  alt="Linux logo"
                  title="Linux"
                  className={`linux-skill-logo`}
                ></img>
              </div>
              <p>
                Managing development and deployment environments with Linux, I
                excel in shell scripting, system administration, and optimizing
                server performance to ensure reliable and secure operations.
              </p>
            </div>
          </Tilt>
          <Tilt className="tilt">
            <div className={`skill-card skill--11`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>GIT</h4>
                <img
                  src={GitLogo}
                  loading="lazy"
                  alt="Linux logo"
                  title="Linux"
                  className={`linux-skill-logo`}
                ></img>
              </div>
              <p>
                Employing Git for version control and collaboration, I manage
                branches, resolve merge conflicts, and maintain a clean,
                organized codebase. Implementing CI/CD pipelines in production
                environments ensures streamlined workflows for seamless
                development-to-production integration.
              </p>
            </div>
          </Tilt>
          <Tilt className="tilt">
            <div className={`skill-card skill--12`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>Photoshop</h4>
                <img
                  src={PhotoshopLogo}
                  loading="lazy"
                  alt="photoshop logo"
                  title="Photoshop"
                  className={`ps-skill-logo`}
                ></img>
              </div>
              <p>
                Designing and creating web assets with Photoshop, I excel in
                image manipulation, graphic optimization for web, and
                maintaining visual consistency across digital platforms. My
                artistic vision combined with technical proficiency produces
                visually compelling content.
              </p>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default SkillsComponent;
