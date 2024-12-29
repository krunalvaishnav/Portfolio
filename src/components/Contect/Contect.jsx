import React from "react";
import { CONTACT } from "../../constants/index.js";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center text-white py-16 px-6 ">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
      <p className="text-lg text-center mb-8">
        Get in touch with me to start your next project or collaboration.
      </p>

      {/* Contact Icons and Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center max-w-4xl mx-auto">
        {/* Email */}
        <div className="flex flex-col items-center space-y-2 text-center">
          <FaEnvelope className="text-blue-500 text-4xl" />
          <p className="text-sm font-medium text-yellow-400">EMAIL</p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-gray-200 hover:text-blue-500 transition"
          >
            {CONTACT.email}
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center space-y-2 text-center">
          <FaPhone className="text-green-500 text-4xl" />
          <p className="text-sm font-medium text-yellow-400">PHONE</p>
          <a
            href="tel:+917043744778"
            className="text-gray-200 hover:text-blue-500 transition"
          >
            {CONTACT.phoneNo}
          </a>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">Follow Me</h2>
        <div className="flex justify-center gap-6 text-3xl">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/krunalvaishnav/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/krunalvaishnav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <FaGithub />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/krunalvaishnav/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-700 transition"
          >
            <SiLeetcode />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/mr___vaishnav__/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
