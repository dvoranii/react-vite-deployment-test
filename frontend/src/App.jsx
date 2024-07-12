import "./global.css";
import { HelmetProvider, Helmet } from "react-helmet-async";
import NavComponent from "./Components/Sections/NavComponent";
import HeroComponent from "./Components/Sections/HeroComponent";
import AboutComponent from "./Components/Sections/AboutComponent";
import ContactComponent from "./Components/Sections/ContactComponent";
import FooterComponent from "./Components/Sections/FooterComponent";

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Web Portfolio - Ildi Dvorani</title>
          <meta
            name="description"
            content="Ildi Dvorani: Experienced Full Stack JavaScript Developer specialized in React. Explore my portfolio to 
            view my latest projects, skills, and let's collaborate to bring your vision to life."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#3498db" />
          <link
            rel="icon"
            // to do
            href="/assets/icons/ildidev-logo_144x144.png"
            type="image/png"
          />
        </Helmet>
      </HelmetProvider>

      <NavComponent></NavComponent>
      <HeroComponent></HeroComponent>
      <AboutComponent></AboutComponent>
      <ContactComponent></ContactComponent>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
