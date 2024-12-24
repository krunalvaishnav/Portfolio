import React from "react";
import profilepic from "../../assets/profile-pic.png";
import cv from "../../assets/Krunal Vaishnav.pdf";

function Main() {
  return (
    <div className="flex flex-col justify-center items-center text-blue-200 py-10 px-6">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-start lg:space-x-16 text-left pb-4 lg:mb-35">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-4 font-semibold tracking-tight lg:mt-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Krunal Vaishnav
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-2xl sm:text-3xl md:text-4xl text-transparent">
              Full Stack Developer
            </span>
            <p className="my-3 py-2 max-w-xl font-light tracking-tighter text-center sm:text-left text-sm sm:text-base">
              I am a Fourth-year BE.IT student and a proficient Full Stack
              Developer, skilled in both MERN and MEAN stacks.
            </p>
            <a
              href={cv}
              download="Krunal_Vaishnav_CV.pdf"
              className="mt-4 inline-block bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 text-white font-semibold py-2 px-4 rounded text-sm sm:text-base"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex  justify-center lg:pt-20">
          <img
            className="rounded-2xl w-auto h-48  sm:h-64 md:h-72 lg:h-80"
            src={profilepic}
            alt="profilepicture"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;