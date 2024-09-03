import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </>
  );
}

export default App;
