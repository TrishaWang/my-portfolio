import React, { useState } from "react";
import data from "./data_skill";

const Skillset = () => {
  const [skillset, useSkillset] = useState(data);

  return (
    <div
      id='skillset'
      className='h-screen w-full grow flex md:flex lg:justify-center sm:align-center bg-[#f7f8f9]'
    >
      <div className='md:h-auto h-screen min-w-[300px] md:min-w-[700px] lg:w-[1000px] flex justify-center flex-col my-auto mx-auto py-3 px-6'>
        {/* skill header */}
        <div className='sm:w-2/3 w-full h-24 p-4 mx-auto mb-10'>
          <h1 className='flex justify-center text-6xl '>
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
                <img className='w-20 mx-auto my-1 ' alt={alt} src={image}></img>
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
