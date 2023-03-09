import React, { useRef, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <>
      {/* nav bar */}
      <div id='nav'>
        {/* nav image */}
        <nav className=' px-12 w-full flex justify-between flex-col md:flex-row items-center h-auto bg-white'>
          <div className='flex justify-between items-center w-[80vw] md:w-[auto]'>
            <div className='w-[130px]'>
              <a href='/' rel='home'>
                <img
                  className='object-cover'
                  src='../img/signature.png'
                  alt='logo'
                ></img>
              </a>
            </div>
            <button
              className='nav-toggle'
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </div>

          {/* nav links */}
          <div className='links-container' ref={linksContainerRef}>
            <ul
              ref={linksRef}
              className='links flex justify-around content-center flex-col md:flex-row align-center justify-center font-bold text-[#021963]'
            >
              <li>
                <a href='#about'>About Me</a>
              </li>
              <li>
                <a href='#skillset'>Skills</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Nav;
