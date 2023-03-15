import React from "react";
import Typed from "react-typed";
import { AiOutlineArrowDown } from "react-icons/ai";

const Home = () => {
  return (
    <>
      {/* Home */}
      <div id='home'>
        <div className='mt-[7rem]'>
          <h1>
            Greetings, I'm Trisha
            <span>!</span>
          </h1>
          <Typed
            strings={[
              "I'm a <Web> Developer 🖥️",
              "I'm a techie.📱",
              "I'm a designer. 🖌️",
              "I'm a board game lover. 🎲",
              "I'm a music lover. 🎵",
              "I'm a cinephile. 🎥",
              "I'm a world traveler. 🗺️",
              "I'm an optimist. 🥛",
            ]}
            typeSpeed={60}
            backSpeed={40}
            attr='placeholder'
            loop
          >
            <input className=' w-[90vw] md:w-[80vw] lg:w-[65vw] ' type='text' />
          </Typed>

          <button className='mx-auto mt-[12rem] block bounce'>
            <a href='#nav' className=''>
              <AiOutlineArrowDown className='inline' stroke-width='35' />
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
