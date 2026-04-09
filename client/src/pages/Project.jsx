import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaTimes, FaEye, FaStar, FaFolder } from "react-icons/fa";
import Lms from "../assets/image/LMS.jpg";
import Hospital from "../assets/image/HAS.jpg";
import Video from "../assets/image/video.png";
import job from "../assets/image/job.webp";
import code from "../assets/image/codeCompare.webp";
import Blog from "../assets/image/BlogApp.webp";
import Help from "../assets/image/HelpCode.jpg";
import Kanban from "../assets/image/Kanban Board.png";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "GrowX Platform",
      shortDesc: "Full-stack career platform serving 500+ users monthly.",
      description: "GrowX is a full-stack career platform integrating Learning, Quiz, Internship, and Job modules, designed to serve 500+ users monthly. It empowers job seekers, learners, and employers with tools for career growth, skill development, and efficient hiring.",
      image: job,
      github: "https://github.com/sahkumarkrishna/GrowX",
      live: "https://growx-platform.onrender.com/",
      tech: ["React.js", "Redux", "Node.js", "MongoDB", "Cloudinary", "JWT"],
      category: "Web App",
      gradient: "from-green-500 to-emerald-600",
      features: [
        "Role-based authentication & secure access control",
        "Learning & Quiz modules for skill enhancement",
        "Internship & job posting with application tracking",
        "Interactive dashboards for employers and seekers",
        "Real-time updates, resume uploads, and notifications"
      ],
      architecture: "Built with a modular MERN stack architecture, GrowX separates frontend, backend, and database layers for scalability. Redux is integrated for state management, while Cloudinary ensures secure media storage."
    },
    {
      id: 2,
      title: "CompileHub",
      shortDesc: "Advanced multi-language compiler with collaborative features.",
      description: "CompileHub is an advanced online code compilation platform supporting multiple programming languages. It features real-time collaboration, code sharing, and an intuitive interface for developers to write, test, and debug code efficiently.",
      image: code,
      github: "https://github.com/sahkumarkrishna/CompileHub",
      live: "https://compilehub-acul.onrender.com/",
      tech: ["React.js", "Node.js", "Express", "WebSocket", "MongoDB"],
      category: "Web App",
      gradient: "from-cyan-500 to-blue-600",
      features: [
        "Multi-language code compilation support",
        "Real-time collaborative coding",
        "Code sharing and version history",
        "Syntax highlighting and auto-completion",
        "Secure code execution environment"
      ],
      architecture: "Built with MERN stack and WebSocket for real-time features. The backend handles code compilation through secure sandboxed environments, while MongoDB stores user code and session data."
    },
    {
      id: 3,
      title: "SkillSwap",
      shortDesc: "Peer-to-peer skill exchange platform connecting learners and experts.",
      description: "SkillSwap is a peer-to-peer skill exchange platform that connects individuals who want to learn new skills with those willing to teach. Users can offer their expertise in exchange for learning something new, creating a collaborative learning community without monetary transactions.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      github: "https://github.com/sahkumarkrishna/SkillSwap",
      live: "https://skillswap-ps3y.onrender.com/",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "JWT", "Cloudinary"],
      category: "Web App",
      gradient: "from-violet-500 to-purple-600",
      features: [
        "Skill-based user profiles with expertise listings",
        "Real-time chat and video call integration",
        "Smart matching algorithm for skill exchange",
        "Session scheduling and calendar management",
        "Rating and review system for quality assurance",
        "Community forums and discussion boards"
      ],
      architecture: "Built with MERN stack architecture. Socket.io enables real-time messaging and notifications. JWT handles secure authentication, while MongoDB stores user profiles, skills, and exchange history. Cloudinary manages profile images and skill-related media."
    },
    {
      id: 4,
      title: "Learning Management System",
      shortDesc: "Comprehensive LMS with course management and progress tracking.",
      description: "A Learning Management System (LMS) built using the MERN stack. It enables seamless student-teacher interaction, course management, real-time progress tracking, and a user-friendly dashboard.",
      image: Lms,
      github: "https://github.com/sahkumarkrishna/Learning-Management-System",
      live: "https://learning-management-system-ie59.onrender.com/",
      tech: ["React.js", "Redux", "Node.js", "Socket.io", "MongoDB"],
      category: "Web App",
      gradient: "from-teal-500 to-green-600",
      features: [
        "User Authentication with JWT",
        "Role-Based Access for students, teachers, and admins",
        "Real-time progress tracking and notifications",
        "Course management with lessons and quizzes",
        "Student-teacher chat and forums",
        "Admin Dashboard and analytics"
      ],
      architecture: "Follows a modular MERN stack architecture with REST APIs. React handles the UI, Node/Express manages backend logic, and MongoDB stores course and user data."
    },
    {
      id: 5,
      title: "Help Code",
      shortDesc: "AI-powered code review platform with intelligent assistance.",
      description: "Help Code AI Powered offers intelligent code review with AI assistance. It features syntax highlighting and a smooth, user-friendly editor. Markdown support ensures clean, readable review formatting. The backend is built with Node.js and Express, connecting to Gemini AI for smart code reviews.",
      image: Help,
      github: "https://github.com/sahkumarkrishna/HelpCode",
      live: "https://helpcode-1.onrender.com/",
      tech: ["React.js", "Node.js", "MongoDB", "AI Integration", "Prism.js", "Markdown"],
      category: "AI Tool",
      gradient: "from-purple-500 to-pink-600",
      features: [
        "AI-Powered Code Review",
        "Syntax Highlighting",
        "User-Friendly Code Editor",
        "Markdown Support"
      ],
      architecture: "Help Code AI Powered uses a React frontend with Prism.js and Markdown for an intuitive coding interface. The backend is built with Node.js and Express, connecting to Gemini AI for smart code reviews."
    },
    {
      id: 6,
      title: "Kanban Board",
      shortDesc: "Task management tool with drag-and-drop functionality.",
      description: "The Kanban Board Platform is a task management tool that helps users organize and track work visually. It supports drag-and-drop cards, task categorization, and team collaboration — enabling seamless project workflow management.",
      image: Kanban,
      github: "https://github.com/sahkumarkrishna/Kanban-Board.git",
      live: "https://kanban-board-ffmo.onrender.com/",
      tech: ["React.js", "Redux", "DnD", "MongoDB", "Framer Motion"],
      category: "Web App",
      gradient: "from-orange-500 to-red-600",
      features: [
        "Drag-and-Drop Task Management",
        "Real-Time Task Updates",
        "Collaborative Boards for Teams",
        "Intuitive UI and Smooth Animations"
      ],
      architecture: "The Kanban Board uses a React frontend with Redux Toolkit for state management and React Beautiful DnD for drag-and-drop functionality. The Node.js and Express backend handles board, list, and task APIs."
    },
    {
      id: 7,
      title: "Blog App",
      shortDesc: "Modern blogging platform with rich text editor.",
      description: "Share your thoughts and stories effortlessly with our blog app. Express your creativity and connect with readers around the globe. Whether it's a personal journey or professional insights, your voice matters.",
      image: Blog,
      github: "https://github.com/sahkumarkrishna/Blog-App",
      live: "https://blog-app-xqmy.onrender.com/",
      tech: ["React.js", "Node.js", "MongoDB", "Cloudinary", "shadcn/ui"],
      category: "Web App",
      gradient: "from-indigo-500 to-purple-600",
      features: [
        "Easy-to-use Editor: Write and format posts effortlessly",
        "Real-time Feedback: See updates and changes instantly",
        "Multi-language Support: Share content in any language",
        "Community Engagement: Connect with readers through comments",
        "Responsive Design: Enjoy seamless blogging on any device"
      ],
      architecture: "The application follows a modular architecture using the MERN stack. The backend manages APIs, authentication, and database operations with MongoDB. Cloudinary is integrated for image storage."
    },
    {
      id: 8,
      title: "Hospital Management",
      shortDesc: "MERN-based hospital system with appointment management.",
      description: "A MERN-based system to streamline hospital operations—patient registration, doctor scheduling, real-time notifications, and analytics. Patients can manage appointments; doctors can manage availability and patient records.",
      image: Hospital,
      github: "https://github.com/sahkumarkrishna/Hospital_management_system",
      live: null,
      tech: ["React.js", "Node.js", "MongoDB", "JWT", "Socket.io"],
      category: "Web App",
      gradient: "from-red-500 to-pink-600",
      features: [
        "Doctor & Patient Registration",
        "Appointment Management",
        "Role-Based Access (Admin, Doctor, Patient)",
        "Real-time Notifications",
        "Doctor Availability Controls",
        "Admin Analytics Dashboard"
      ],
      architecture: "MERN-based modular app with REST APIs. MongoDB stores user & appointment data. Secure authentication using JWT and Firebase."
    },
    {
      id: 9,
      title: "Video Streaming Platform",
      shortDesc: "Netflix-style video streaming with user management.",
      description: "A video streaming platform similar to Netflix, built with the MERN stack. Features include user authentication, video upload, streaming, and personalized recommendations.",
      image: Video,
      github: "https://github.com/sahkumarkrishna/video-streaming",
      live: null,
      tech: ["React.js", "Node.js", "MongoDB", "AWS S3", "JWT"],
      category: "Web App",
      gradient: "from-red-600 to-orange-600",
      features: [
        "User authentication and profiles",
        "Video upload and streaming",
        "Search and filter functionality",
        "Personalized recommendations",
        "Responsive video player"
      ],
      architecture: "Built with MERN stack, using AWS S3 for video storage and streaming. MongoDB handles user data and video metadata."
    },
  ];

  const categories = ["All", "Web App", "AI Tool"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            🚀 My Work
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            A collection of projects showcasing my skills in full-stack development, AI integration, and modern web technologies.
          </p>
        </motion.div>

        {/* Filter Tabs - Modern Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {[
            { name: "All", filter: "All", icon: "✨", gradient: "from-green-500 to-emerald-600" },
            { name: "Web App", filter: "Web App", icon: "🌐", gradient: "from-blue-500 to-indigo-600" },
            { name: "AI Tool", filter: "AI Tool", icon: "🤖", gradient: "from-purple-500 to-pink-600" }
          ].map((tab) => (
            <motion.button
              key={tab.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(tab.filter)}
              className={`relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === tab.filter
                  ? `bg-gradient-to-r ${tab.gradient} text-white shadow-xl shadow-${tab.gradient.includes('green') ? 'green' : tab.gradient.includes('blue') ? 'blue' : 'purple'}-500/30`
                  : "bg-white dark:bg-gray-800 text-muted-foreground hover:text-gray-900 dark:hover:text-white shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">{tab.icon}</span>
                <span>{tab.name}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* Image Section */}
                <div
                  className="relative overflow-hidden cursor-pointer aspect-[4/3]"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
                      <FaEye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-white bg-gradient-to-r ${project.gradient} shadow-lg`}>
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Featured Star */}
                  {index < 3 && (
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                      <div className="bg-yellow-500 rounded-full p-1.5 sm:p-2 shadow-lg">
                        <FaStar className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-700/50 text-[10px] sm:text-xs rounded-lg text-gray-600 dark:text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-700/50 text-[10px] sm:text-xs rounded-lg text-gray-500">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-xl text-xs sm:text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300"
                    >
                      <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-xl text-xs sm:text-sm font-medium hover:shadow-lg transition-all duration-300`}
                      >
                        <FaExternalLinkAlt className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Live</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                      >
                        <FaEye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">View</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 dark:from-green-900/20 dark:via-blue-900/20 dark:to-purple-900/20 border border-gray-200 dark:border-gray-700 overflow-hidden">
            
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
            
            <div className="relative">
              <FaRocket className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 dark:text-green-400 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Have a Project in Mind?</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 max-w-md mx-auto">
                I'm always excited to work on new projects and collaborate with creative minds. Let's build something amazing together!
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
              >
                Let's Work Together
                <FaExternalLinkAlt className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-t-2xl sm:rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-t-2xl sm:rounded-t-3xl" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-white/30 transition-colors"
                >
                  <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6">
                  <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium text-white bg-gradient-to-r ${selectedProject.gradient} mb-2 sm:mb-3 inline-block`}>
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 md:p-8">
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Features */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-sm sm:text-base">✓</span>
                    Key Features
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedProject.gradient} mt-2 flex-shrink-0`} />
                        <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm sm:text-base">
                      <FaCode className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-700 text-xs sm:text-sm rounded-xl text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architecture */}
                <div className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-sm sm:text-base">🏗️</span>
                    Project Architecture
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.architecture}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-4 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-medium text-sm sm:text-base hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                    View Code
                  </a>
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-4 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-xl font-medium text-sm sm:text-base hover:shadow-xl transition-all duration-300`}
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
