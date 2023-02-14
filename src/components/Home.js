import React from "react";
import Typed from "react-typed";

const Home = () => {
  return (
    <>
      {/* Home */}
      <div
        id='home'
        className='min-h-screen w-full bg-[#f4f9fc] flex flex-col justify-center items-center '
      >
        <div className='home'>
          <h1>
            Greetings, I'm Trisha
            <span>! &</span>
            {/* <span className='greetings_span'>&</span> */}
          </h1>
          <Typed
            strings={[
              "I'm a <Web> Developer",
              "I a techie.",
              "I a designer.",
              "I a superhero movie fan. 🗲",
              "I a world traveler. 🗺️",
              "I an optimist. 🥛",
            ]}
            typeSpeed={80}
            backSpeed={60}
            attr='placeholder'
            loop
          >
            <input className=' w-[90vw] md:w-[85vw] lg:w-[70vw] ' type='text' />
          </Typed>

          <button className=' mx-auto mt-[8rem] block'>
            <a href='#nav' className=''>
              more about me
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
