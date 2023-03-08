import React from "react";

const Nav = () => {
  return (
    <>
      {/* nav bar */}
      <div id='nav' className='sticky top-0'>
        {/* nav image */}
        <nav className=' px-12 w-full flex justify-between items-center h-auto bg-white'>
          <div className='md:w-[130px] w-150px'>
            <img
              className='object-cover'
              src='../img/signature.png'
              alt='logo'
            ></img>
          </div>

          {/* nav links */}

          <ul className=' flex justify-around content-center flex-col md:flex-row align-center justify-center font-bold text-[#021963]'>
            {/* <li>
                <a href='#home' className=''>
                  Home
                </a>
              </li> */}
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
        </nav>
      </div>
    </>
  );
};
export default Nav;
