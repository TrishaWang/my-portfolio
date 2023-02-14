import Nav from "./Nav";
import About from "./About.js";
import Skillset from "./Skillset";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <div className='App scroll-smooth'>
      <Home />
      <Nav />
      {/* About */}
      <About />
      {/* Skill */}
      <Skillset />
      {/* Projects */}
      <Projects />
      {/* Contact */}
      <Contact />
    </div>
  );
}

export default App;
