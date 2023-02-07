import Nav from "./Nav";
import About from "./About.js";
import Skillset from "./Skillset";
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
      <div id='projects' className='w-full h-screen scroll-smooth'>
        Projects
      </div>

      {/* Contact */}
      <div
        id='contact'
        className='container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10'
      >
        <p className='text-3xl text-gray-700 font-bold mb-5'>Contact Me</p>
        <a href="mailto:trish.regine@gmail.com?subject=🤘 Hi Trisha, I'd like to hire you">
          hire me
        </a>
        <p className='text-gray-500 text-lg'></p>
      </div>
    </div>
  );
}

export default App;
