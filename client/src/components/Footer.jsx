import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart, FaCode } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sahkumarkrishna",
      icon: FaGithub,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/krishna-kumar-8b28492a6/",
      icon: FaLinkedin,
      color: "hover:text-blue-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Name */}
    


          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              © {currentYear} Krishna Kumar. Made with{" "}
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse" /> and{" "}
              <FaCode className="w-4 h-4 text-blue-500" />
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;