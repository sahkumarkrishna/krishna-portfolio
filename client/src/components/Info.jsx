import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Info = () => {
  return (
    <div className="flex justify-center gap-6 mt-2">
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          to="https://github.com/sahkumarkrishna" // Ensure this route exists in your app
          className="font-sacramento  flex items-center gap-2 hover:text-blue-500"
        >
          <FaGithub size={24} />
          <span>GitHub</span>
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          to="https://www.linkedin.com/in/krishna-kumar-8b28492a6/" // Ensure this route exists in your app
          className="font-sacramento  flex items-center gap-2 hover:text-blue-500"
        >
          <FaLinkedin size={24} />
          <span>LinkedIn</span>
        </Link>
      </motion.div>

      
    </div>
  );
};

export default Info;
