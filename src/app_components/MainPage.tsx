import About from "./About";
import Contact from "./Contact";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Services from "./Services";
import Skills from "./Skills";

const MainPage = () => {
  return (
    <>
      <Intro />
      <About />
      <Services />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </>
  );
};

export default MainPage;
