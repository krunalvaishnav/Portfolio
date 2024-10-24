import React from 'react';
import { PROJECTS } from '../../constants/index.js';

function Project() {
  return (
    <div className='mt-8'>
      <h1 className='text-5xl font-bold mb-8 text-center'>Projects</h1>
      <div>
        {PROJECTS.map((Project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
              <img
                src={Project.image}
                width={200}
                height={200}
                alt={Project.title}
                className='mb-6 rounded border-4 border-lime-400'
              />
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{Project.title}</h6>
              <p className='mb-4 text-neutral-400'>{Project.description}</p>
              {Project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'
                >
                  {tech}
                </span>
              ))}
              <a
                href={Project.link}
                className='text-blue-300 hover:underline'
                target='_blank'
              >
                Github Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
