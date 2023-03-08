import React from "react";

const About = () => {
  return (
    <div
      id='about'
      className='w-full min-h-screen scroll-smooth w-screen flex flex-col grow justify-center items-center '
    >
      <div className='w-[70%] my-[10%]'>
        <h1 className='text-[5rem] font-bitter font-bold text-left'>
          About my work
          <span>.</span>
        </h1>
        <h2>
          Hi, Im Trisha, an artist at heart. Passionate about innovation,
          creating new things, and using my skills to improve quality of
          people’s lives (like a fairy godmother of sorts? heh). If you are or
          you know of an organization whose vision aligns with mine, feel free
          to connect! I specialise in accessibility, performance and usability
          without sacrificing creativity. I'm open to Job opportunities where I
          can contribute, learn and grow. If you have a good opportunity that
          matches my skills and experience then don't hesitate to contact me.
        </h2>
      </div>
    </div>
  );
};
export default About;
