import Nav from "./components/Nav";
import About from "./components/About.js";
import Skillset from "./components/Skillset";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div className='App scroll-smooth'>
      <Home />
      <Nav />
      <About />
      <Skillset />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
