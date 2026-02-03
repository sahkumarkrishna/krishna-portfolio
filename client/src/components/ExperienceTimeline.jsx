import React from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  { date: "Feb 2025 - Jun 2025", title: "Frontend Developer", company: "Ceeras" },
  { date: "Mar 2025 – May 2025", title: "Full Stack Developer & Team Lead", company: "Goklyn Pvt. Ltd." }
];

const ExperienceTimeline = () => {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <div className="relative">
        
        {/* Mobile Timeline */}
        <div className="block sm:hidden">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start mb-6">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <FaBriefcase className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex-1">
                <div className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mb-1">{exp.date}</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{exp.title}</div>
                <div className="text-xs font-medium text-blue-600 dark:text-blue-400">{exp.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden sm:block">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[2px] bg-cyan-300"></div>
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-2">{exp.date}</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{exp.title}</div>
                  <div className="text-base font-medium text-blue-600 dark:text-blue-400">{exp.company}</div>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 h-12 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg z-10">
                <FaBriefcase className="h-5 w-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;