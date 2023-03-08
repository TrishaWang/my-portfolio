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
          <h1 className='py-6 text-[15vw] md:text-[10vw] lg:text-[5vw]'>
            Greetings, I'm Trisha
            <span>.</span>
          </h1>
          <Typed
            strings={[
              "I'm a Frontend <Web> Developer",
              "I love tech",
              "I love art",
              "I love designing",
              "I love coding",
            ]}
            typeSpeed={80}
            backSpeed={40}
            attr='placeholder'
            loop
          >
            <input
              className=' w-[90vw] md:w-[85vw] lg:w-[70vw] '
              type='text'
            />
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
