import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaCode,
  FaTools,
  FaJava,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTypescript,
  SiGithub,
  SiFigma,
  SiRedux,
  SiBootstrap,
  SiIntellijidea,
  SiDocker,
} from "react-icons/si";

import { AiOutlineFilePdf } from "react-icons/ai";
import profileImage from "../assets/image/font.gif";

// Enhanced External Link component
const ExternalLink = ({ to, children, className = "" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(to, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`group cursor-pointer ${className}`}
    >
      <Link
        to={to}
        onClick={handleClick}
        className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 hover:border-green-500/50 dark:hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
      >
        {children}
        <FaArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
      </Link>
    </motion.div>
  );
};

const techData = {
  "Programming Languages": [
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: FaCode,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      name: "Python",
      link: "https://www.python.org/",
      icon: FaCode,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
      icon: SiTypescript,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "Core Java",
      link: "https://www.oracle.com/java/",
      icon: FaJava,
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: FaCode,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      name: "CSS3",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: FaCss3Alt,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
  ],
  "Libraries & Frameworks": [
    {
      name: "React.js",
      link: "https://react.dev/",
      icon: FaReact,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "Redux",
      link: "https://redux.js.org/",
      icon: SiRedux,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      name: "Node.js",
      link: "https://nodejs.org/",
      icon: FaNodeJs,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      name: "Express.js",
      link: "https://expressjs.com/",
      icon: SiExpress,
      color: "text-gray-700 dark:text-gray-300",
      bgColor: "bg-gray-50 dark:bg-gray-800/20",
    },
    {
      name: "Bootstrap",
      link: "https://getbootstrap.com/",
      icon: SiBootstrap,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      name: "Tailwind CSS",
      link: "https://tailwindcss.com/",
      icon: FaCss3Alt,
      color: "text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "Metrical UI",
      link: "https://metrical-ui.com/",
      icon: FaTools,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
  ],
  Database: [
    {
      name: "MongoDB",
      link: "https://www.mongodb.com/",
      icon: SiMongodb,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      name: "MySQL",
      link: "https://www.mysql.com/",
      icon: SiMysql,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "Firebase",
      link: "https://firebase.google.com/",
      icon: SiFirebase,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
  ],
  "Cloud Platforms": [
    {
      name: "AWS (EC2)",
      link: "https://aws.amazon.com/",
      icon: SiDocker,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      name: "Google Cloud Platform (GCP)",
      link: "https://cloud.google.com/",
      icon: SiDocker,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "Firebase",
      link: "https://firebase.google.com/",
      icon: SiFirebase,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
  ],
  "Tools & Platforms": [
    {
      name: "Git & GitHub",
      link: "https://github.com/",
      icon: SiGithub,
      color: "text-black dark:text-white",
      bgColor: "bg-gray-50 dark:bg-gray-800/20",
    },
    {
      name: "Docker",
      link: "https://www.docker.com/",
      icon: SiDocker,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "Visual Studio Code",
      link: "https://code.visualstudio.com/",
      icon: FaTools,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "IntelliJ IDEA",
      link: "https://www.jetbrains.com/idea/",
      icon: SiIntellijidea,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "Figma (UI/UX)",
      link: "https://www.figma.com/",
      icon: SiFigma,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      name: "Postman",
      link: "https://www.postman.com/",
      icon: FaCode,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
  ],
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Design */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/50 dark:from-green-900/10 dark:via-transparent dark:to-blue-900/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Section - Enhanced */}
            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-4">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Hello, I'm{" "}
                <span className="gradient-text block lg:inline">
                  Full-stack Developer
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                I'm Krishna Kumar, a Full Stack Developer driven by a passion for
                crafting scalable, efficient, and intuitive digital solutions. I
                combine technical expertise with a deep understanding of user needs
                to build seamless applications that empower users and fuel business
                growth.
              </motion.p>

              {/* Enhanced Social Links */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <ExternalLink to="https://github.com/sahkumarkrishna">
                  <FaGithub className="w-5 h-5" />
                  <span className="font-medium">GitHub</span>
                </ExternalLink>

                <ExternalLink to="https://www.linkedin.com/in/krishna-kumar-8b28492a6/">
                  <FaLinkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </ExternalLink>

                <ExternalLink to="/Krishna%20Resume.pdf">
                  <AiOutlineFilePdf className="w-5 h-5" />
                  <span className="font-medium">Resume</span>
                </ExternalLink>
              </motion.div>
            </motion.div>

            {/* Right - Enhanced Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur-2xl opacity-20 animate-pulse" />
                <img
                  src={profileImage}
                  alt="Krishna Kumar - Full Stack Developer"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md h-auto floating-animation"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Tech Stack Section */}
      <motion.div
        className="container mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Tools & Technologies
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            A curated list of the tools, technologies, and gadgets I regularly use
            to bring my projects to life, though my toolkit is ever-evolving.
          </motion.p>
        </div>

        {Object.entries(techData).map(([category, items], categoryIndex) => (
          <motion.div
            key={category}
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 + 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              {category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {items.map(({ name, icon: Icon, color, bgColor, link }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 + categoryIndex * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="tech-card p-4 cursor-pointer"
                  onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
                >
                  <div className={`${bgColor} rounded-lg p-3 mb-3 w-fit mx-auto`}>
                    <Icon
                      className={`${color} text-2xl`}
                      title={name}
                      aria-label={name}
                    />
                  </div>
                  <span className="text-sm font-medium text-center block">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
