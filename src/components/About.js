import React, { useState } from "react";
import data from "../data/data_about";

const About = () => {
  const [about, setAbout] = useState(data);
  return (
    <div id='about'>
      <div className='max-w-[70vw] my-[10vw]'>
        <h1 className='text-[5rem] font-bold text-left'>
          About me
          <span>.</span>
        </h1>
        {about.map((about) => {
          const { id, paragraph } = about;
          return <p kay={id}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
};
export default About;
