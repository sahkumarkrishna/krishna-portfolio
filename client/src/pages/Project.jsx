import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lms from "../assets/image/LMS.jpg";
import Hospital from "../assets/image/HAS.jpg";

const Project = () => {
  return (
    <div>
      {/* LMS Project */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start p-3 sm:p-4 gap-6">
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start mt-20 sm:mt-8 md:mt-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={Lms}
            alt="LMS Project"
            className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 h-auto rounded-xl shadow-lg mt-12 "
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-left mt-16 px-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white lg:mt-16">
            Learning Management System{" "}
            <Link
              to="https://github.com/sahkumarkrishna/LMS"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              [GitHub]
            </Link>
          </h2>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            A Learning Management System (LMS) built using the MERN stack. It enables seamless student-teacher interaction, course management, real-time progress tracking, and a user-friendly dashboard.
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            Enhances the learning experience through intuitive tools for course creation, engagement, and performance analysis. Includes personalized feedback, notifications, forums, and assignment submissions.
          </p>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Key Features:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>User Authentication with JWT</li>
            <li>Role-Based Access for students, teachers, and admins</li>
            <li>Real-time progress tracking and notifications</li>
            <li>Course management with lessons and quizzes</li>
            <li>Student-teacher chat and forums</li>
            <li>Admin Dashboard and analytics</li>
            <li>Mobile-friendly design</li>
          </ul>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Technologies Used:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>Frontend: React.js, Redux, Tailwind CSS, Axios</li>
            <li>Backend: Node.js, Express.js, MongoDB, Mongoose, JWT</li>
            <li>Real-time: Socket.io</li>
            <li>File Storage: Cloudinary</li>
            <li>Authentication: Bcrypt.js, Multer</li>
            <li>Additional: Firebase (optional)</li>
          </ul>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Project Architecture:
          </h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            Follows a modular MERN stack architecture with REST APIs. React handles the UI, Node/Express manages backend logic, and MongoDB stores course and user data.
          </p>
        </motion.div>
      </div>

      {/* Hospital System Project */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start p-3 sm:p-4 gap-6">
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start mt-20 sm:mt-8 md:mt-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={Hospital}
            alt="Hospital Appointment System"
            className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 h-auto rounded-xl shadow-lg"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-left mt-8 sm:mt-8 md:mt-16 px-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className=" text-xl sm:text-2xl font-bold mb-2 dark:text-white">
            Hospital Appointment System{" "}
            <Link
              to="https://github.com/sahkumarkrishna/Hospital_management_system"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              [GitHub]
            </Link>
          </h2>

          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            A MERN-based system to streamline hospital operations—patient registration, doctor scheduling, real-time notifications, and analytics.
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            Patients can manage appointments; doctors can manage availability and patient records. Admins oversee system activity with dashboards.
          </p>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Key Features:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>Doctor & Patient Registration</li>
            <li>Appointment Management</li>
            <li>Role-Based Access (Admin, Doctor, Patient)</li>
            <li>Real-time Notifications</li>
            <li>Doctor Availability Controls</li>
            <li>Admin Analytics Dashboard</li>
            <li>Mobile-Responsive UI</li>
          </ul>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Technologies Used:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>Frontend: React.js, Redux, Tailwind CSS, Axios</li>
            <li>Backend: Node.js, Express.js, MongoDB, Mongoose, JWT</li>
            <li>Real-time: Socket.io</li>
            <li>File Uploads: Multer, Cloudinary</li>
            <li>Auth: Firebase Auth, Bcrypt.js</li>
          </ul>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Project Architecture:
          </h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            MERN-based modular app with REST APIs. MongoDB stores user & appointment data. Secure authentication using JWT and Firebase.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
