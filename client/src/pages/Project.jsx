import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lms from "../assets/image/LMS.jpg";
import Hospital from "../assets/image/HAS.jpg";
import Video from "../assets/image/video.png";
import job from "../assets/image/job.webp";
import code from "../assets/image/codeCompare.webp";
import Blog from "../assets/image/BlogApp.webp";
import Help from "../assets/image/HelpCode.jpg";

const Project = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-end md:items-start p-3 sm:p-4 gap-6">
        <motion.div
          className="w-full flex flex-col justify-center md:justify-start sm:mt-40 md:mt-28"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl w-full md:w-1/2 flex justify-start md:justify-start mt-20 sm:mt-8 md:mt-10">
            Project
          </h2>
                  <hr className="border-t-4 border-yellow-500 mb-2 w-16 rounded" />
          <p className="text-gray-700 dark:text-gray-400 text-xl xl:text-base text-left md:text-left">
            I've worked on tons of little projects over the years, but these are
            the ones that I'm most proud of. Many of them are open-source, so
            check out the code and contribute.
          </p>
        </motion.div>
      </div>

      {/* Help Code Platform */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start p-3 sm:p-4 gap-6">
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start mt-20 sm:mt-8 md:mt-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={Help}
            alt="Language Exchange Platform"
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
            Help Code{" "}
            <Link
              to="https://github.com/sahkumarkrishna/HelpCode"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              [GitHub]
            </Link>
            <Link
              to="https://helpcode-1.onrender.com/"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              [Live]
            </Link>
          </h2>

          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            Help Code AI Powered offers intelligent code review with AI
            assistance. It features syntax highlighting and a smooth,
            user-friendly editor. Markdown support ensures clean, readable
            review formatting.
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            The backend is built with Node.js and Express, connecting to Gemini
            AI for smart code reviews.
          </p>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            🔑 Key Features:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>AI-Powered Code Review</li>
            <li>Syntax Highlighting</li>
            <li>User-Friendly Code Editor</li>
            <li>Markdown Support</li>
          </ul>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            ⚙️ Technologies Used:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>React.js, Prism.js, Markdown, Axois Tailwind CSS</li>
            <li>Node.js, Express, MongoDB, </li>
            <li>AI Integration</li>
          </ul>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Project Architecture:
          </h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            Help Code AI Powered uses a React frontend with Prism.js and
            Markdown for an intuitive coding interface. The backend is built
            with Node.js and Express, connecting to Gemini AI for smart code
            reviews. Code flows from user input to AI feedback, displayed with
            syntax highlighting and markdown formatting.
          </p>
        </motion.div>
      </div>

      {/*  Online Code Compiler*/}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start p-3 sm:p-4 gap-6">
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start mt-20 sm:mt-8 md:mt-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={code}
            alt="Language Exchange Platform"
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
             Online Code Compiler{" "}
            <Link
              to="https://github.com/sahkumarkrishna/Online-Compile-Code"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              [GitHub]
            </Link>
            <Link
              to="https://online-compile-code-1.onrender.com/"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              [Live]
            </Link>
          </h2>

          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            The compile code platform allows users to write, compile, and run
            code in multiple programming languages directly in the browser. It
            provides real-time feedback, syntax highlighting, and supports code
            execution through backend APIs.
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            A compile code platform enables users to write, compile, and execute
            code online with real-time output and multi-language support.
          </p>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            🔑 Key Features:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>Online code editor with syntax highlighting</li>
            <li>Support for multiple programming languages</li>
            <li>Real-time code execution and output display</li>
            <li>User authentication and code history saving</li>
          </ul>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            ⚙️ Technologies Used:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>React.js, Axois Tailwind CSS</li>
            <li>Node.js, Express, MongoDB, </li>
            <li>Third-party Compiler APIs</li>
            <li>JWT Authentication</li>
          </ul>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Project Architecture:
          </h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            The project follows a layered MERN stack architecture with separate
            components for frontend, backend, and database. Code execution is
            handled via backend integration with third-party compiler APIs,
            ensuring secure and scalable performance.
          </p>
        </motion.div>
      </div>

     {/* GrowX Platform */}
<div className="flex flex-col md:flex-row-reverse items-center md:items-start p-3 sm:p-4 gap-6">
  <motion.div
    className="w-full md:w-1/2 flex justify-center md:justify-start mt-20 sm:mt-8 md:mt-20"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <img
      src={job}
      alt="GrowX Career Platform"
      className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 h-auto rounded-xl shadow-lg"
    />
  </motion.div>

  <motion.div
    className="w-full md:w-1/2 text-left mt-8 sm:mt-8 md:mt-16 px-4"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white">
      GrowX Platform{" "}
      <Link
        to="https://github.com/sahkumarkrishna/GrowX"
        className="text-blue-600 hover:underline dark:text-blue-400"
      >
        [GitHub]
      </Link>
      <Link
        to="https://growx.onrender.com/"
        className="text-blue-600 hover:underline dark:text-blue-400 ml-2"
      >
        [Live]
      </Link>
    </h2>

    <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
      GrowX is a full-stack career platform integrating{" "}
      <span className="font-semibold">Learning, Quiz, Internship, and Job modules</span>,
      designed to serve 500+ users monthly. It empowers job seekers, learners,
      and employers with tools for career growth, skill development, and efficient hiring.
    </p>

    <h3 className="text-lg sm:text-xl font-semibold mb-2 dark:text-white">
      🔑 Key Features:
    </h3>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
      <li>Role-based authentication & secure access control</li>
      <li>Learning & Quiz modules for skill enhancement</li>
      <li>Internship & job posting with application tracking</li>
      <li>Interactive dashboards for employers and seekers</li>
      <li>Real-time updates, resume uploads, and notifications</li>
    </ul>

    <h3 className="text-lg sm:text-xl font-semibold mb-2 dark:text-white">
      ⚙️ Tech Stack:
    </h3>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
      <li>Frontend: React.js, Axios, Tailwind CSS, Redux</li>
      <li>Backend: Node.js, Express.js, MongoDB</li>
      <li>Cloud & Media: Cloudinary</li>
      <li>Authentication: JWT</li>
    </ul>

    <h3 className="text-lg sm:text-xl font-semibold mb-2 dark:text-white">
     Project Architecture:
    </h3>
    <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
      Built with a modular MERN stack architecture, GrowX separates frontend,
      backend, and database layers for scalability. Redux is integrated for
      state management, while Cloudinary ensures secure media storage. The
      platform is deployed on Render with scalable APIs, maintaining 99.9%
      uptime.
    </p>
  </motion.div>
</div>


      {/* Blog Platform */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start p-3 sm:p-4 gap-6">
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start mt-20 sm:mt-8 md:mt-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={Blog}
            alt="Language Exchange Platform"
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
            Blog App{" "}
            <Link
              to="https://github.com/sahkumarkrishna/Blog-App"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              [GitHub]
            </Link>
            <Link
              to="https://blog-app-xqmy.onrender.com/"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              [Live]
            </Link>
          </h2>

          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            Share your thoughts and stories effortlessly with our blog app.
            Express your creativity and connect with readers around the globe.
            Whether it’s a personal journey or professional insights, your voice
            matters. Start blogging today and build your own community of
            followers.
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            Write, publish, and share your stories with ease using our blog app.
            Engage with readers through comments and likes. Turn your ideas into
            impactful posts that inspire and inform.
          </p>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            🔑 Key Features:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>Easy-to-use Editor: Write and format posts effortlessly.</li>
            <li>Real-time Feedback: See updates and changes instantly.</li>
            <li>Multi-language Support: Share content in any language.</li>
            <li>
              Community Engagement: Connect with readers through comments and
              likes.
            </li>
            <li>Responsive Design: Enjoy seamless blogging on any device.</li>
          </ul>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            ⚙️ Technologies Used:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>React.js,Axois, Tailwind CSS, shadcn/ui</li>
            <li>Node.js, Express, MongoDB, </li>
            <li>Cloudinary</li>
            <li>JWT Authentication</li>
          </ul>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Project Architecture:
          </h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            The application follows a modular architecture using the MERN stack.
            The backend (Node.js, Express) manages APIs, authentication, and
            database operations with MongoDB. The frontend (React) handles user
            interface and state management, using shadcn/ui for components.
            Cloudinary is integrated for image storage and retrieval.
          </p>
        </motion.div>
      </div>

      {/* LMS Project */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start p-3 sm:p-4 gap-6">
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start mt-20 sm:mt-8 md:mt-10"
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
            A Learning Management System (LMS) built using the MERN stack. It
            enables seamless student-teacher interaction, course management,
            real-time progress tracking, and a user-friendly dashboard.
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            Enhances the learning experience through intuitive tools for course
            creation, engagement, and performance analysis. Includes
            personalized feedback, notifications, forums, and assignment
            submissions.
          </p>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            🔑 Key Features:
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
            ⚙️ Technologies Used:
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
            Follows a modular MERN stack architecture with REST APIs. React
            handles the UI, Node/Express manages backend logic, and MongoDB
            stores course and user data.
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
            A MERN-based system to streamline hospital operations—patient
            registration, doctor scheduling, real-time notifications, and
            analytics.
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            Patients can manage appointments; doctors can manage availability
            and patient records. Admins oversee system activity with dashboards.
          </p>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            🔑 Key Features:
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
            ⚙️ Technologies Used:
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
            MERN-based modular app with REST APIs. MongoDB stores user &
            appointment data. Secure authentication using JWT and Firebase.
          </p>
        </motion.div>
      </div>

      {/* Language Exchange Platform */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start p-3 sm:p-4 gap-6">
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start mt-20 sm:mt-8 md:mt-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={Video}
            alt="Language Exchange Platform"
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
            Language Exchange Platform{" "}
            <Link
              to="https://github.com/sahkumarkrishna/streamify-video-calls-App"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              [GitHub]
            </Link>
          </h2>

          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            A real-time platform for global users to practice languages through
            chat and video calls — featuring beautiful themes, secure login, and
            modern technology.
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            Features include AI-powered conversation suggestions, multilingual
            support, and cross-device syncing.
          </p>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            🔑 Key Features:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>Real-time video chat & messaging</li>
            <li>Language exchange matching</li>
            <li>Interactive practice exercises</li>
            <li>User profiles and feedback</li>
            <li>Mobile-friendly design</li>
          </ul>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            ⚙️ Technologies Used:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            <li>React.js, Redux,Axois, Tailwind CSS</li>
            <li>Node.js, Express, MongoDB, Socket.io</li>
            <li>WebRTC for video streaming</li>
            <li>JWT Authentication</li>
          </ul>

          <h3 className=" text-lg sm:text-xl font-semibold mb-2 dark:text-white">
            Project Architecture:
          </h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
            MERN-based modular app with REST APIs. MongoDB stores user &
            Language Exchange Platform data. Secure authentication using JWT and
            Firebase.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
