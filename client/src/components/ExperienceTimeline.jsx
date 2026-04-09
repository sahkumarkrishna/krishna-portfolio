import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  { date: "Feb 2025 - Jun 2025", title: "MERN Stack Developer & Team Lead", company: "Ceeras It Services", description: "Building and enhancing a book recommendation platform with focus on user experience and responsive design." },
  { date: "Mar 2025 – May 2025", title: "Full Stack Developer & Team Lead", company: "Goklyn Pvt. Ltd.", description: "Led end-to-end development of OYO-style hotel booking platform, managing frontend and backend teams." }
];

const ExperienceTimeline = () => {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <div className="relative">
        
        {/* Timeline Line - Right Side */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-[3px] bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 rounded-full" />

        {/* Cards - Left Side */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start md:items-center">
              
              {/* Icon Circle */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`relative z-10 flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl ring-4 ring-white dark:ring-gray-900 ${
                  index === 0 
                    ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                    : 'bg-gradient-to-br from-blue-500 to-indigo-600'
                }`}
              >
                <FaBriefcase className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </motion.div>

              {/* Card */}
              <div className={`ml-4 md:ml-8 flex-1 ${
                index % 2 === 0 
                  ? 'md:mr-auto md:text-left' 
                  : 'md:mr-auto md:text-left'
              }`}>
                <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  
                  {/* Status Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${
                      index === 0 
                        ? 'from-green-500 to-emerald-600' 
                        : 'from-blue-500 to-indigo-600'
                    } text-white`}>
                      Completed
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <span className={`w-2 h-2 rounded-full ${
                        index === 0 ? 'bg-green-500' : 'bg-blue-500'
                      } animate-pulse`} />
                      {exp.date}
                    </span>
                  </div>

                  {/* Company */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.company}
                  </h3>

                  {/* Role */}
                  <p className={`text-sm md:text-base font-medium mb-3 ${
                    index === 0 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-blue-600 dark:text-blue-400'
                  }`}>
                    {exp.title}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;