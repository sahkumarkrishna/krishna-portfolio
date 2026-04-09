import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaUniversity, FaMapMarkerAlt } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { MdSchool } from "react-icons/md";

const steps = [
  { 
    date: "2022 - 2026", 
    title: "B.Tech in Computer Science", 
    institution: "Maharishi Markandeshwar University",
    board: "MM (Deemed to be University)",
    location: "Ambala, Haryana",
    type: "university",
    grade: "Pursuing",
    percentage: "7.2+ CGPA"
  },
  { 
    date: "2020 - 2022", 
    title: "Higher Secondary (12th)", 
    institution: "Forbesganj College",
    board: "Bihar School Examination Board",
    location: "Forbesganj, Bihar",
    type: "college",
    grade: "Completed",
    percentage: "64.4%"
  },
  { 
    date: "2018 - 2020", 
    title: "Secondary School (10th)", 
    institution: "Middle School, Bathnaha",
    board: "Bihar School Examination Board",
    location: "Bathnaha, Bihar",
    type: "school",
    grade: "Completed",
    percentage: "61%"
  }
];

const VerticalTimeline = () => {
  const getIcon = (type) => {
    switch (type) {
      case "university":
        return <FaUniversity className="w-6 h-6" />;
      case "college":
        return <HiAcademicCap className="w-6 h-6" />;
      case "school":
        return <MdSchool className="w-6 h-6" />;
      default:
        return <FaGraduationCap className="w-6 h-6" />;
    }
  };

  const getGradient = (type) => {
    switch (type) {
      case "university":
        return "from-green-500 to-emerald-600";
      case "college":
        return "from-blue-500 to-indigo-600";
      case "school":
        return "from-purple-500 to-pink-600";
      default:
        return "from-green-500 to-blue-600";
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      <div className="relative">
        
        {/* Mobile Timeline */}
        <div className="block md:hidden">
          <div className="relative">
            <div className="absolute left-[21px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-green-500 via-blue-500 to-purple-500" />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative flex items-start mb-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${getGradient(step.type)} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white">{getIcon(step.type)}</span>
                </motion.div>
                
                <div className="ml-4 flex-1">
                  <div className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700`}>
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getGradient(step.type)} text-white`}>
                        {step.grade}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        {step.percentage}
                      </span>
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {step.title}
                    </h3>
                    
                    <div className="space-y-1 mb-2">
                      <p className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                        <FaSchool className="w-3 h-3" />
                        {step.institution}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <FaMapMarkerAlt className="w-3 h-3" />
                        {step.location}
                      </p>
                      <p className="text-xs text-muted-foreground/70">
                        {step.board}
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        {step.date}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 rounded-full" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                className={`absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${getGradient(step.type)} flex items-center justify-center shadow-xl`}
              >
                <span className="text-white">{getIcon(step.type)}</span>
              </motion.div>

              <div className={`w-6/12 ${index % 2 === 0 ? 'pr-24 text-right' : 'pl-24 text-left ml-auto'}`}>
                <div className="group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getGradient(step.type)} text-white`}>
                        {step.grade}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        {step.percentage}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      {step.date}
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300">
                    {step.title}
                  </h3>
                  
                  <div className="space-y-1">
                    <p className="text-base font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <FaSchool className="w-4 h-4 text-blue-500" />
                      {step.institution}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <FaMapMarkerAlt className="w-3 h-3" />
                      {step.location}
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      {step.board}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTimeline;
