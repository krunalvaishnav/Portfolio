import React from "react";
import { PROJECTS } from "../../constants/index.js";

function Project() {
  return (
    <div className="bg-[#0a002e] min-h-screen overflow-x-hidden px-4 sm:px-4 lg:px-8 pt-10 pb-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-center text-white">
        Projects
      </h1>

      <div>
        {PROJECTS.map((Project, index) => (
          <React.Fragment key={index}>
            <div
              className=" sm:mb-10 flex flex-col lg:flex-row items-center lg:justify-between rounded-xl p-3 sm:p-8 bg-[#1b1b3a] shadow-lg border border-[#1c2a48] hover:border-[#2b5292] hover:bg-[#111e37] transition duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="w-full max-w-md mb-5 lg:mb-0">
                <img
                  src={Project.image}
                  alt={Project.title}
                  className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
                />
              </div>

              {/* Project Details */}
              <div className="w-full lg:pl-8 text-center lg:text-left">
               <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-200 mb-3">
                  {Project.title}
                </h2>
                 <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-4 px-1 sm:px-0">
                  {Project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                  {Project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-neutral-900 px-3 py-1 text-xs sm:text-sm md:text-base font-medium text-purple-400 hover:bg-purple-500 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <a
                  href={Project.link}
                  className="inline-block text-base sm:text-lg font-medium text-blue-400 hover:text-blue-500 hover:underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Project.title === "Tulsi Ropes Industry Website"
                    ? "Visit Website"
                    : "GitHub Link"}
                </a>
              </div>
            </div>

            {index < PROJECTS.length - 1 && (
              <hr className="border-t border-neutral-700 my-10" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Project;
