import React from "react";
import Typed from "react-typed";

const Home = () => {
  return (
    <>
      {/* Home */}
      <div
        id='home'
        className='w-screen h-screen bg-[#f4f9fc] flex flex-col justify-center items-center '
      >
        <div className='home w-[90%]'>
          <h1 className=' py-6'>
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
              "I love sleeping",
              "<3",
            ]}
            typeSpeed={80}
            backSpeed={40}
            attr='placeholder'
            loop
          >
            <input
              className=' w-[90%] md:w-[45rem] lg:w-[65rem] '
              type='text'
            />
          </Typed>

          <button className=' mx-auto mt-24 block'>
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
