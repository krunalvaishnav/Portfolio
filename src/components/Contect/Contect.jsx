import React from 'react';
import { CONTACT } from '../../constants/index.js';

function Contact() {
  return (
    <div className=" flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-900 text-white py-10 px-6">
      <h1 className="text-5xl font-bold mb-8 text-center">Get in Touch</h1>
      
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-center lg:space-x-16 text-left">
        {/* Contact Information */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="space-y-4">
            <p className="text-lg">{CONTACT.address}</p>
            <p className="text-lg">{CONTACT.phoneNo}</p>
            <a href={`mailto:${CONTACT.email}`} className="text-blue-400 hover:text-blue-600 transition border-b border-blue-400">
              {CONTACT.email}
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="lg:w-1/2 bg-gray-950 text-white rounded-lg shadow-lg p-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="w-full">
              <label htmlFor="name" className="block text-left font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block text-left font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-left font-medium">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;