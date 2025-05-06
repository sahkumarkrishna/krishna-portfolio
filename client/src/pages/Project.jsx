import React from "react";
import { motion } from "framer-motion";
import Lms from "../assets/image/LMS.jpg";
import Hospital from "../assets/image/HAS.jpg";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start p-3 sm:p-4 gap-6">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start mt-20 sm:mt-8 md:mt-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={Lms}
            alt="LMS Project"
            className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 h-auto rounded-xl shadow-lg mt-12"
          />
        </motion.div>

        {/* Details Section */}
        <motion.div
          className="w-full md:w-1/2 text-left mt-16 px-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-sacramento  text-xl sm:text-2xl font-bold mb-2 dark:text-white lg:mt-16">
            {" "}
            Learning Management System
            <Link
              to="https://github.com/sahkumarkrishna/LMS"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              [GitHub]
            </Link>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm sm:text-base">
            A Learning Management System (LMS) built using the MERN stack
            (MongoDB, Express, React, Node.js). It enables seamless
            student-teacher interaction, course management, real-time progress
            tracking, and a user-friendly dashboard.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm sm:text-base">
            This system enhances the learning experience by providing intuitive
            tools for course creation, student engagement, and performance
            analysis. It also allows instructors to track individual student
            progress and offer personalized feedback, improving the overall
            learning journey.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm sm:text-base">
            With features such as real-time notifications, discussions, and
            assignment submissions, the LMS provides an efficient and
            interactive platform for both students and teachers to collaborate
            and stay updated.
          </p>

          <h3 className="font-sacramento  text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Key Features:
          </h3>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>User Authentication with JWT</li>
            <li>Role-Based Access for students, teachers, and admins</li>
            <li>Real-time progress tracking with notifications</li>
            <li>Course management with lessons, assignments, and quizzes</li>
            <li>Student-teacher interaction through chat and forums</li>
            <li>Admin Dashboard for analytics and user management</li>
            <li>Mobile-friendly design for accessibility</li>
          </ul>

          <h3 className=" font-sacramento  text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Technologies Used:
          </h3>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>Frontend: React.js, Redux, Tailwind CSS, Axios</li>
            <li>Backend: Node.js, Express.js, MongoDB, Mongoose, JWT</li>
            <li>Real-time communication: Socket.io</li>
            <li>File storage: Cloudinary</li>
            <li>Authentication: Bcrypt.js, Multer for file uploads</li>
            <li>
              Additional Services: Firebase (for notifications, hosting, or Auth
              if used)
            </li>
          </ul>

          <h3 className=" font-sacramento  text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Project Architecture:
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm sm:text-base">
            The application follows a RESTful architecture with modular
            components for both the frontend and backend. React is used for the
            user interface, and the backend APIs are built with Node.js and
            Express. MongoDB is used to store all course and user data, with
            JWT-based authentication for secure access.
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start p-3 sm:p-4 gap-6">
        {/* Image Section */}
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

        {/* Details Section */}
        <motion.div
          className="w-full md:w-1/2 text-left mt-8 sm:mt-8 md:mt-16 px-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-sacramento  text-xl sm:text-2xl font-bold mb-2 dark:text-white">
            Hospital Appointment Booking System
            <Link
              to="https://github.com/sahkumarkrishna/Hospital_management_system"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              [GitHub]
            </Link>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm sm:text-base">
            A Hospital Appointment Booking System built using the MERN stack
            (MongoDB, Express, React, Node.js). It streamlines the process of
            scheduling doctor appointments, patient registrations, and real-time
            appointment tracking.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm sm:text-base">
            This platform improves hospital operations by enabling doctors and
            patients to interact efficiently. Patients can book, cancel, or
            reschedule appointments, while doctors can manage their availability
            and patient history.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm sm:text-base">
            Real-time notifications, secure logins, and administrative control
            panels make this system a robust and user-friendly solution for
            hospital management.
          </p>

          <h3 className="font-sacramento  text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Key Features:
          </h3>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>Patient & Doctor Registration</li>
            <li>Appointment Scheduling and Rescheduling</li>
            <li>Role-Based Access for Admins, Doctors, and Patients</li>
            <li>Real-time Notifications for Appointment Status</li>
            <li>Doctor Availability Management</li>
            <li>Admin Dashboard for Appointment Analytics</li>
            <li>Mobile-friendly and Responsive UI</li>
          </ul>

          <h3 className="font-sacramento  text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Technologies Used:
          </h3>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>Frontend: React.js, Redux, Tailwind CSS, Axios</li>
            <li>Backend: Node.js, Express.js, MongoDB, Mongoose, JWT</li>
            <li>Real-time communication: Socket.io</li>
            <li>File storage: Cloudinary</li>
            <li>
              Authentication: Firebase Auth, Bcrypt.js, Multer for file uploads
            </li>
          </ul>

          <h3 className="font-sacramento  text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Project Architecture:
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm sm:text-base">
            The application is built using a modular MERN stack architecture
            with RESTful APIs. React manages the UI, while Node.js and Express
            handle backend logic. MongoDB stores user and appointment data.
            Authentication is handled securely via JWT and Firebase Auth.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
