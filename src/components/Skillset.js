import React, { useState } from "react";
import data from "../data/data_skill";

const Skillset = () => {
  const [skillset, useSkillset] = useState(data);

  return (
    <div id='skillset'>
      <div className=' min-h-screen  min-w-[85vw] md:min-w-[70vw] lg:min-w-[60vw] flex justify-center flex-col md:my-0 my-10  py-3 '>
        {/* skill header */}
        <div className=' mx-auto mb-10 py-5'>
          <h1 className=' text-[70px] flex justify-center text-6xl '>
            my skillset
            <span>.</span>
          </h1>
        </div>
        {/* skill images */}
        <div className='grid justify-items  align-items grid-cols-2 gap-x-[4rem] gap-y-[2.8rem] sm:grid-cols-4 mt-5 '>
          {skillset.map((skills) => {
            const { id, skill, image } = skills;

            return (
              <div
                key={id}
                className=' hover:scale-110 duration-500 justify-center align-items  flex flex-col'
              >
                <i className={image}></i>
                <div>
                  <p className='mt-4 text-center'>{skill}</p>
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
