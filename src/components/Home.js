import React from "react";
import Typed from "react-typed";

const Home = () => {
  return (
    <>
      {/* Home */}
      <div id='home'>
        <div className='home'>
          <h1>
            Greetings, I'm Trisha
            <span>!</span>
          </h1>
          <Typed
            strings={[
              "I'm a <Web> Developer π₯οΈ",
              "I'm a techie.π±",
              "I'm a designer. ποΈ",
              "I'm a board game lover. π²",
              "I'm a music lover. π΅",
              "I'm a cinephile. π₯",
              "I'm a world traveler. πΊοΈ",
              "I'm an optimist. π₯",
            ]}
            typeSpeed={60}
            backSpeed={40}
            attr='placeholder'
            loop
          >
            <input className=' w-[90vw] md:w-[80vw] lg:w-[65vw] ' type='text' />
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
