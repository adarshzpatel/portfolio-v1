import Container from '../components/layout/Container'
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";


export const HomePage = () => {
  return (
    <Container>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </Container>
  );
};

export default HomePage;
