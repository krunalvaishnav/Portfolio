import React from 'react'
import { EXPERIENCES } from '../../constants/index.js'

function Experiance() {
    return (
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-900 text-white py-10 px-4 sm:px-6 lg:px-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center">Experience</h1>
            <div className="w-full">
                {EXPERIENCES.map((experiance, index) => (
                    <div key={index} className="mb-10 flex flex-col lg:flex-row lg:justify-center">
                        <div className="w-full lg:w-1/4 mb-2 lg:mb-0">
                            <p className="text-lg text-neutral-400">{experiance.year}</p>
                        </div>
                        <div className="w-full max-w-3xl lg:w-3/4">
                            <h3 className="text-xl font-semibold mb-2">
                                {experiance.role} - <span className="text-purple-400">{experiance.company}</span>
                            </h3>
                            <p className="mb-3 text-neutral-400">{experiance.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {experiance.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experiance
