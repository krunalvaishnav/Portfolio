import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaFigma, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
import React from "react";

function Skills() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-900 text-white py-16 px-6">
      <h1 className="text-4xl sm:text-5xl mt-9 font-bold mb-8 text-center">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <FaJava className="text-5xl sm:text-7xl text-red-600" />
          <p className="mt-1 text-center text-blue-200 text-sm sm:text-base">Java</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <IoLogoJavascript className="text-5xl sm:text-7xl text-yellow-400" />
          <p className="mt-1 text-center text-blue-200 text-sm sm:text-base">Javascript</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <RiReactjsLine className="text-5xl sm:text-7xl text-cyan-400" />
          <p className="mt-1 text-center text-blue-200 text-sm sm:text-base">ReactJs</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <FaNodeJs className="text-5xl sm:text-7xl text-green-500" />
          <p className="mt-1 text-center text-blue-200 text-sm sm:text-base">NodeJs</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <BiLogoMongodb className="text-5xl sm:text-7xl text-green-500" />
          <p className="mt-1 text-center text-blue-200 text-sm sm:text-base">Mongodb</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <FaFigma className="text-5xl sm:text-7xl text-pink-400" />
          <p className="mt-1 text-center text-blue-200 text-sm sm:text-base">Figma</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <FaHtml5 className="text-5xl sm:text-7xl text-red-500" />
          <p className="mt-1 text-center text-blue-200 text-sm sm:text-base">HTML</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <FaCss3Alt className="text-5xl sm:text-7xl text-blue-500" />
          <p className="mt-1 text-center text-blue-200 text-sm sm:text-base">CSS</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <FaGitAlt className="text-5xl sm:text-7xl text-red-500" />
          <p className="mt-1 text-center text-blue-200 text-sm sm:text-base">Git</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <FiDatabase className="text-5xl sm:text-7xl text-blue-500" />
          <p className="mt-1 text-center text-blue-200 text-sm sm:text-base">SQL</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
