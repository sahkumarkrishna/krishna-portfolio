import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const steps = [
  { date: "2022 - 2026", title: "Bachelor of Technology (B.Tech)", institution: "Maharishi Markandeshwar University" },
  { date: "2020 - 2022", title: "Higher Secondary Certificate", institution: "Forbesganj College" },
  { date: "2018 - 2020", title: "Secondary School Certificate", institution: "Middle School, Forbesganj" }
];

const VerticalTimeline = () => {
  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="relative">
        
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[3px] bg-cyan-300"></div>

        {/* Timeline Items */}
        {steps.map((step, index) => (
          <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            
            {/* Content Card */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <div className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-2">{step.date}</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</div>
                <div className="text-base font-medium text-blue-600 dark:text-blue-400">{step.institution}</div>
              </div>
            </div>
            
            {/* Center Dot with Calendar Icon */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg z-10">
              <FaCalendarAlt className="h-5 w-5 text-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTimeline;