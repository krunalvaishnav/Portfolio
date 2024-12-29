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
        {[
          { Icon: FaJava, color: "text-red-600", label: "Java" },
          { Icon: IoLogoJavascript, color: "text-yellow-400", label: "Javascript" },
          { Icon: RiReactjsLine, color: "text-cyan-400", label: "ReactJs" },
          { Icon: FaNodeJs, color: "text-green-500", label: "NodeJs" },
          { Icon: BiLogoMongodb, color: "text-green-500", label: "Mongodb" },
          { Icon: FaFigma, color: "text-pink-400", label: "Figma" },
          { Icon: FaHtml5, color: "text-red-500", label: "HTML" },
          { Icon: FaCss3Alt, color: "text-blue-500", label: "CSS" },
          { Icon: FaGitAlt, color: "text-red-500", label: "Git" },
          { Icon: FiDatabase, color: "text-blue-500", label: "SQL" },
        ].map(({ Icon, color, label }, index) => (
          <div
            key={index}
            className={`rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center transition-transform transform hover:scale-110  hover:border-1 hover:shadow-md hover:shadow-white`}
          >
            <Icon className={`text-5xl sm:text-7xl ${color}`} />
            <p className="mt-1 text-center text-blue-200 text-sm sm:text-base">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
