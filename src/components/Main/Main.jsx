import React from "react";
import profilepic from "../../assets/profile-pic.png";
import cv from "../../assets/Krunal Vaishnav.pdf";

function Main() {
  return (
    //className='border-b border-neutral-800 pb-4 lg:mb-35'
    <div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-2xl font-semibold tracking-tight lg:mt-16 lg:text-7xl">
              Krunal Vaishnav
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl text-transparent">
              Full Stack Developer
            </span>
            <p className="my-3 py-2 max-w-xl font-light tracking-tighter">
              I am a Fourth-year BE.IT student and a proficient Full Stack
              Developer, skilled in both MERN and MEAN stacks. My expertise
              spans backend and full-stack development, with a strong focus on
              efficient application development and seamless API connectivity. I
              am actively seeking opportunities and mentors to further enhance
              my skills and take on new challenges in the field.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pt-20 flex justify-center ">
          <img
            className="rounded-2xl w-auto h-80 "
            src={profilepic}
            alt="profilepicture"
          />
        </div>
        <a
          href={cv}
          download="Krunal_Vaishnav_CV.pdf"
          className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Main;
