import React from "react";
import { PROJECTS } from "../../constants/index.js";

function Project() {
  return (
    <div className="mt-8">
      <h1 className="text-5xl font-bold mb-8 text-center">Projects</h1>
      <div>
        {PROJECTS.map((Project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <img
                src={Project.image}
                width={200}
                height={200}
                alt={Project.title}
                className="mb-6 rounded border-4 border-lime-400 mx-auto"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4">
              <h6 className="mb-2 font-semibold">{Project.title}</h6>
              <p className="mb-4 text-neutral-400">{Project.description}</p>
              <div className="flex flex-wrap mb-4">
                {Project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {Project.title === "Tulsi Ropes Industry Website" ? (
                <a
                  href={Project.link}
                  className="text-blue-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              ) : (
                <a
                  href={Project.link}
                  className="text-blue-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Link
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
