import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Info = () => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="flex justify-center gap-6">
        <motion.div whileHover={{ scale: 1.1 }}>
          <button
            onClick={() => handleLinkClick("https://github.com/sahkumarkrishna")}
            className="font-sacramento flex items-center gap-2 hover:text-blue-500 cursor-pointer p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }}>
          <button
            onClick={() => handleLinkClick("https://www.linkedin.com/in/krishna-kumar-8b28492a6/")}
            className="font-sacramento flex items-center gap-2 hover:text-blue-500 cursor-pointer p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Info;
