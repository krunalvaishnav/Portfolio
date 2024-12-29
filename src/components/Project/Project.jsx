import React from "react";
import { PROJECTS } from "../../constants/index.js";

function Project() {
  return (
    <div className="mt-8 ml-5 mr-10 text-wrap">
      <h1 className="text-5xl font-bold mb-8 text-center">Projects</h1>
      <div>
        {PROJECTS.map((Project, index) => (
          <React.Fragment key={index}>
            <div
              className="mb-12 flex flex-wrap lg:justify-center items-center rounded-lg p-6 shadow-lg hover:shadow-2xl hover:shadow-gray-700 transition-shadow"
            >
              {/* Project Image */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <img
                  src={Project.image}
                  width={200}
                  height={200}
                  alt={Project.title}
                  className="mb-6 rounded-lg border-4 border-lime-400 mx-auto transition-transform transform hover:scale-105"
                />
              </div>

              {/* Project Details */}
              <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 px-4">
                <h6 className="mb-2 text-2xl font-semibold">{Project.title}</h6>
                <p className="mb-4 text-neutral-400 leading-relaxed">{Project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap mb-4">
                  {Project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mb-2 inline-block rounded-full bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-500 shadow-sm hover:bg-purple-500 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                {Project.title === "Tulsi Ropes Industry Website" ? (
                  <a
                    href={Project.link}
                    className="text-blue-300 hover:underline text-lg font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                ) : (
                  <a
                    href={Project.link}
                    className="text-blue-300 hover:underline text-lg font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Link
                  </a>
                )}
              </div>
            </div>
            {/* Divider Between Projects */}
            {index < PROJECTS.length - 1 && <hr className="border-t border-neutral-700 my-8" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Project;
