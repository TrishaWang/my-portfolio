import React from "react";

const Nav = () => {
  return (
    <>
      {/* nav bar */}
      <div id='nav' className='sticky top-0'>
        {/* nav image */}
        <nav className='py-4 w-full flex justify-between h-auto bg-white'>
          <div className='lg:w-1/5 w-1/2'>
            <div className='md:w-[150px] w-300px ml-8 -my-5'>
              <img
                className='object-cover'
                src='../img/signature.png'
                alt='logo'
              ></img>
            </div>
          </div>
          <div className='lg:w-2/5 w-2/3 flex justify-around pr-10'>
            {/* nav links */}

            <ul className='w-full flex justify-around content-center flex-col md:flex-row py-2 font-bold text-[#021963]'>
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
          </div>
        </nav>
      </div>
    </>
  );
};
export default Nav;
