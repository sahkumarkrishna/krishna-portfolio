import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaTimes, FaEye } from "react-icons/fa";
import Lms from "../assets/image/LMS.jpg";
import Hospital from "../assets/image/HAS.jpg";
import Video from "../assets/image/video.png";
import job from "../assets/image/job.webp";
import code from "../assets/image/codeCompare.webp";
import Blog from "../assets/image/BlogApp.webp";
import Help from "../assets/image/HelpCode.jpg";
import Kanban from "../assets/image/Kanban Board.png";
import ecommerce from "../assets/image/mock.webp";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
      category: "Career Platform",
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
      category: "Development Tool",
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
      category: "Education Platform",
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
      github: "hhttps://github.com/sahkumarkrishna/Learning-Management-System",
      live: "https://learning-management-system-ie59.onrender.com/",
      tech: ["React.js", "Redux", "Node.js", "Socket.io", "MongoDB"],
      category: "Education",
      gradient: "from-teal-500 to-green-600",
      features: [
        "User Authentication with JWT",
        "Role-Based Access for students, teachers, and admins",
        "Real-time progress tracking and notifications",
        "Course management with lessons and quizzes",
        "Student-teacher chat and forums",
        "Admin Dashboard and analytics",
        "Mobile-friendly design"
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
      category: "AI Platform",
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
      category: "Productivity",
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
      category: "Content Platform",
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
      title: "E-commerce Website",
      shortDesc: "Full-featured online shopping platform with payment integration.",
      description: "A comprehensive e-commerce platform built with the MERN stack. Features include product catalog, shopping cart, order management, payment integration, and admin dashboard for inventory management.",
      image: "https://magesolution.com/wp-content/uploads/2022/07/ecommerce-website-design-examples-1024x768.jpg",
      github: "https://github.com/sahkumarkrishna/Ecommerce-website",
      live: "https://pragra-shop.onrender.com/",
      tech: ["React.js", "Redux", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
      category: "E-commerce",
      gradient: "from-yellow-500 to-orange-600",
      features: [
        "Product catalog with search and filters",
        "Shopping cart and wishlist functionality",
        "Secure payment integration with Stripe",
        "Order tracking and management",
        "Admin dashboard for inventory control",
        "User reviews and ratings",
        "Responsive design for all devices"
      ],
      architecture: "Built with MERN stack architecture. Redux manages global state, Stripe handles payments, and Cloudinary stores product images. RESTful APIs connect frontend and backend."
    },
    {
      id: 9,
      title: "Tic-Tac-Toe Game",
      shortDesc: "Interactive Tic-Tac-Toe game with AI opponent.",
      description: "A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Features include player vs player mode, smooth animations, and responsive design for all devices.",
      image: "https://media.istockphoto.com/id/1443725051/photo/business-marketing-strategy-planning-concept-hand-holding-wooden-block-tic-tac-toe-board-game.jpg?s=612x612&w=0&k=20&c=SfxA8EJpY2lx9tYxNEiiTQSBsGHxNBfor6eElQ1kPXs=",
      github: "https://github.com/sahkumarkrishna/Tic-Tac-Toe",
      live: "https://sahkumarkrishna.github.io/Tic-Tac-Toe/",
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: "Game",
      gradient: "from-pink-500 to-rose-600",
      features: [
        "Player vs Player mode",
        "Win detection algorithm",
        "Smooth animations and transitions",
        "Responsive design",
        "Score tracking"
      ],
      architecture: "Built with vanilla JavaScript using DOM manipulation. Game logic implements win detection algorithms and state management for player turns."
    },
    {
      id: 10,
      title: "Professional Tax Calculator",
      shortDesc: "Advanced tax calculation tool with detailed breakdowns.",
      description: "A professional tax calculator application that helps users calculate taxes with detailed breakdowns. Features include multiple tax slabs, deductions, and comprehensive tax reports.",
      image: "https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696229_1280.jpg",

      live: "https://professional-tax-man-prez.bolt.host/",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      category: "Finance Tool",
      gradient: "from-emerald-500 to-teal-600",
      features: [
        "Multiple tax slab calculations",
        "Deduction management",
        "Detailed tax breakdown reports",
        "Export to PDF functionality",
        "Responsive and user-friendly interface"
      ],
      architecture: "Built with React.js for dynamic UI updates. Implements complex tax calculation logic with support for various deductions and tax slabs. Tailwind CSS provides responsive styling."
    },
    {
      id: 11,
      title: "Hospital Management",
      shortDesc: "MERN-based hospital system with appointment management.",
      description: "A MERN-based system to streamline hospital operations—patient registration, doctor scheduling, real-time notifications, and analytics. Patients can manage appointments; doctors can manage availability and patient records.",
      image: Hospital,
      github: "https://github.com/sahkumarkrishna/Hospital_management_system",
      live: null,
      tech: ["React.js", "Node.js", "MongoDB", "JWT", "Socket.io"],
      category: "Healthcare",
      gradient: "from-red-500 to-pink-600",
      features: [
        "Doctor & Patient Registration",
        "Appointment Management",
        "Role-Based Access (Admin, Doctor, Patient)",
        "Real-time Notifications",
        "Doctor Availability Controls",
        "Admin Analytics Dashboard",
        "Mobile-Responsive UI"
      ],
      architecture: "MERN-based modular app with REST APIs. MongoDB stores user & appointment data. Secure authentication using JWT and Firebase."
    },
    {
      id: 12,
      title: "Video Streaming Platform",
      shortDesc: "Netflix-style video streaming with user management.",
      description: "A video streaming platform similar to Netflix, built with the MERN stack. Features include user authentication, video upload, streaming, and personalized recommendations.",
      image: Video,
      github: "https://github.com/sahkumarkrishna/video-streaming",
      live: null,
      tech: ["React.js", "Node.js", "MongoDB", "AWS S3", "JWT"],
      category: "Entertainment",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            🚀 My Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any project image to explore detailed information, features, and technical architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image - Clickable */}
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <FaEye className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.gradient}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.shortDesc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md text-gray-500">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300`}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700/30">
            <FaRocket className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              I'm always excited to work on new projects and collaborate with creative minds.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
            >
              Let's Work Together
              <FaExternalLinkAlt className="w-4 h-4" />
            </Link>
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${selectedProject.gradient} mb-2 inline-block`}>
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4">🔑 Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedProject.gradient} mt-2 flex-shrink-0`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4">⚙️ Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-lg text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architecture */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4">🏗️ Project Architecture</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.architecture}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    View Code
                  </motion.a>
                  {selectedProject.live && (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300`}
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                      Live Demo
                    </motion.a>
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
