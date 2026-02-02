import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiArrowLeft, FiSearch } from "react-icons/fi";
import { HiOutlineEmojiSad } from "react-icons/hi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-[12rem] md:text-[16rem] font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-none">
            404
          </h1>
        </motion.div>

        {/* Sad emoji with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6"
        >
          <HiOutlineEmojiSad className="text-6xl text-gray-400 dark:text-gray-500 mx-auto mb-4" />
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          The page you're looking for doesn't exist or has been moved. 
          Don't worry, let's get you back on track!
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
            >
              <FiHome className="w-5 h-5" />
              Go Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-3 px-8 py-4 border-2 border-green-500 text-green-600 dark:text-green-400 rounded-xl font-medium hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
            >
              <FiArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>
        </motion.div>

        {/* Helpful links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-12 p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center justify-center gap-2">
            <FiSearch className="w-5 h-5" />
            Looking for something specific?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Projects
            </Link>
            <Link
              to="/services"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Contact
            </Link>
          </div>
        </motion.div>

        {/* Floating elements for visual appeal */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full opacity-20"
          />
          <motion.div
            animate={{
              y: [20, -20, 20],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 right-10 w-6 h-6 bg-blue-400 rounded-full opacity-20"
          />
          <motion.div
            animate={{
              y: [-10, 10, -10],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-20"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
