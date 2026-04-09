import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiArrowLeft, FiSearch } from "react-icons/fi";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto text-center relative">
        
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 sm:mb-8"
        >
          <h1 className="text-8xl sm:text-[10rem] md:text-[14rem] lg:text-[16rem] font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-none">
            404
          </h1>
        </motion.div>

        {/* Alert icon with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4 sm:mb-6"
        >
          <AlertCircle className="text-4xl sm:text-6xl text-gray-400 dark:text-gray-500 mx-auto mb-2 sm:mb-4" />
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-4 px-4"
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
        >
          The page you're looking for doesn't exist or has been moved. 
          Don't worry, let's get you back on track!
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              <FiHome className="w-4 h-4 sm:w-5 sm:h-5" />
              Go Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-500 text-green-600 dark:text-green-400 rounded-xl font-medium hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 text-sm sm:text-base"
            >
              <FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              Go Back
            </button>
          </motion.div>
        </motion.div>

        {/* Helpful links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mx-4 sm:mx-0"
        >
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4 flex items-center justify-center gap-2">
            <FiSearch className="w-4 h-4 sm:w-5 sm:h-5" />
            Looking for something?
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base">
            <Link
              to="/about"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium px-2 py-1"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium px-2 py-1"
            >
              Projects
            </Link>
            <Link
              to="/services"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium px-2 py-1"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium px-2 py-1"
            >
              Contact
            </Link>
          </div>
        </motion.div>

        {/* Floating elements for visual appeal */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
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
