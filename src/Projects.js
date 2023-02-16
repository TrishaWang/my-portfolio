import React, { useState } from "react";
import data from "./data_project";

const Projects = () => {
  const [projects, useProjects] = useState(data);
  return (
    <div
      id='projects'
      className='w-full min-h-screen scroll-smooth w-screen flex flex-col grow justify-center items-center'
    >
      <div className='w-[70%] my-[10%]'>
        <h1 className='text-[5rem]  font-bitter'>
          My projects
          <span>.</span>
        </h1>
        {projects.map((project) => {
          const { id, name, desc, tech } = project;

          return (
            <div key={id}>
              <h2>{name}</h2>
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
