import React, { useState } from "react";
import data from "../data/data_skill";

const Skillset = () => {
  const [skillset, useSkillset] = useState(data);

  return (
    <div
      id='skillset'
      className='min-h-screen w-full flex grow  content-center justify-center  '
    >
      <div className=' min-h-screen  min-w-[85vw] md:min-w-[70vw] lg:min-w-[60vw] flex justify-center flex-col my-[5%]  py-3 '>
        {/* skill header */}
        <div className=' mx-auto my-10'>
          <h1 className='my-5 text-[5.1rem] flex justify-center text-6xl '>
            my skillset
            <span>.</span>
          </h1>
          {/* <p className='flex py-2 justify-start text-sm'>
              These are the technologies I've worked with
            </p> */}
        </div>
        {/* skill images */}
        <div className='grid grid-cols-2 sm:grid-cols-4'>
          {skillset.map((skills) => {
            const { id, skill, image, alt } = skills;

            return (
              <div key={id} className='my-4 hover:scale-110 duration-500'>
                {/* <img className='w-20 mx-auto my-1 ' alt={alt} src=></img> */}
                <i class={image}></i>
                <div>
                  <p className='mt-4 '>{skill}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skillset;
