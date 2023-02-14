import Nav from "./components/Nav";
import About from "./components/About.js";
import Skillset from "./components/Skillset";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
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
