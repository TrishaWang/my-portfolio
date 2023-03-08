import React, { useState } from "react";
import data from "../data/data_project";

const Projects = () => {
  const [projects, useProjects] = useState(data);
  return (
    <div
      id='projects'
      className='w-full min-h-screen scroll-smooth flex flex-col justify-center items-center'
    >
      <div className='max-w-[85%] my-[10%] bg-pink'>
        <div id='title'>
          <h1 className='text-[5rem]  font-bitter '>
            My projects
            <span>.</span>
          </h1>
        </div>
        <div className='flex flex-col text-left pt-[1.8rem]'>
          {projects.map((project) => {
            const { id, name, desc, tech } = project;

            return (
              <div key={id} className='my-[2rem]'>
                <h2>{name}</h2>
                <p className='my-[0.9rem]'>{desc}</p>
                {tech.map((tech) => {
                  return <span className='tech_stack_projects'>{tech}</span>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
