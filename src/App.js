import { useRef } from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

const App = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  const navigateToSection = (event) => {
    if (event.target.value === "About") {
      aboutRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    } else if (event.target.value === "Skills") {
      skillsRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    } else {
      // Home was clicked, so scroll to top
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="App">
      <Navbar navigateToSection={navigateToSection} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Footer />
    </div>
  );
};

export default App;
