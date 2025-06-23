import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuMoveRight } from "react-icons/lu";
import PageNotFound from "../public/notFound.svg"; // Make sure the path is correct

const MotionLink = motion(Link); // Wrap Link with motion

const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
    

      <motion.p
        className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Oops! You hit a dead end.
      </motion.p>

      <motion.img
        src={PageNotFound}
        alt="Page Not Found Illustration"
        className="w-80 my-6"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <motion.p
        className="text-gray-600 dark:text-gray-400 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        The page you're looking for doesn't exist... maybe it moved?
      </motion.p>

      <motion.div
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <MotionLink
          to="/"
          className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-800 px-5 py-2 rounded-lg transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go Back Home <LuMoveRight />
        </MotionLink>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
