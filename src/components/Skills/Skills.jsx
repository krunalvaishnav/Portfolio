import React from "react";
import { RiReactjsLine, RiJavascriptLine } from "react-icons/ri";
import {
  FaFigma,
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
import { TbBrandRedux } from "react-icons/tb";
import {
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiMongoose,
  SiMysql,
  SiTypescript,
  SiSocketdotio,
  SiGraphql,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";
import { BsShieldLock } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { Icon: FaHtml5, color: "text-red-500", label: "HTML" },
      { Icon: FaCss3Alt, color: "text-blue-500", label: "CSS" },
      { Icon: RiJavascriptLine, color: "text-yellow-400", label: "JavaScript" },
      { Icon: RiReactjsLine, color: "text-cyan-400", label: "React.js" },
      { Icon: SiNextdotjs, color: "text-white", label: "Next.js" },
      { Icon: TbBrandRedux, color: "text-purple-400", label: "Redux" },
      { Icon: SiTailwindcss, color: "text-cyan-300", label: "Tailwind CSS" },
      { Icon: FaFigma, color: "text-pink-400", label: "Figma" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { Icon: FaNodeJs, color: "text-green-500", label: "Node.js" },
      { Icon: SiExpress, color: "text-gray-300", label: "Express.js" },
      { Icon: AiOutlineApi, color: "text-teal-300", label: "RESTful APIs" },
      { Icon: BsShieldLock, color: "text-gray-300", label: "JWT / OAuth" },
      { Icon: SiSocketdotio, color: "text-white", label: "Socket.io" },
      { Icon: SiGraphql, color: "text-pink-500", label: "GraphQL" },
    ],
  },
  {
    title: "Database",
    skills: [
      { Icon: BiLogoMongodb, color: "text-green-500", label: "MongoDB" },
      { Icon: SiMongoose, color: "text-red-400", label: "Mongoose" },
      { Icon: SiMysql, color: "text-blue-500", label: "MySQL" },
      { Icon: FiDatabase, color: "text-blue-300", label: "SQL" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { Icon: FaGitAlt, color: "text-orange-500", label: "Git" },
      { Icon: SiPostman, color: "text-orange-400", label: "Postman" },
      { Icon: SiTypescript, color: "text-blue-400", label: "TypeScript" },
    ],
  },
  {
    title: "Deployment",
    skills: [
      { Icon: SiVercel, color: "text-white", label: "Vercel" },
      { Icon: SiNetlify, color: "text-green-400", label: "Netlify" },
      { Icon: SiRender, color: "text-blue-400", label: "Render" },
    ],
  },
  {
    title: "Other",
    skills: [{ Icon: FaJava, color: "text-red-600", label: "Java" }],
  },
];

function Skills() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-900 text-white py-16 px-4 sm:px-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
        Skills
      </h1>

      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-14">
        {skillGroups.map((group, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold text-blue-300 mb-6 text-center sm:text-left">
              {group.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
              {group.skills.map(({ Icon, color, label }, index) => (
                <div
                  key={index}
                  className="rounded-2xl border-2 border-neutral-800 p-5 flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-110 hover:border-[#2b5292] hover:shadow-lg hover:shadow-[#1d3560] hover:bg-[#1d3560] hover:text-white"
                >
                  <Icon className={`text-5xl sm:text-6xl ${color}`} />
                  <p className="mt-1 text-center text-blue-200 text-sm sm:text-base font-medium">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
