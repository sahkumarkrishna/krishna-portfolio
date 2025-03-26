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
  SiPostman,
  SiIntellijidea,
  SiDocker,
} from "react-icons/si";
import { AiOutlineFilePdf } from "react-icons/ai";
import profileImage from "../assets/image/image.jpg";

const techData = {
  Technologies: [
    {
      name: "HTML",

      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: FaCode,
      color: "text-orange-600",
    },
    {
      name: "CSS",

      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: FaCss3Alt,
      color: "text-blue-500",
    },
    {
      name: "React",
      link: "https://react.dev/",
      icon: FaReact,
      color: "text-blue-500",
    },
    {
      name: "Redux",
      link: "https://redux.js.org/",
      icon: SiRedux,
      color: "text-purple-600",
    },
    {
      name: "Next.js",
      link: "https://nextjs.org/",
      icon: SiNextdotjs,
      color: "text-black dark:text-white",
    },
    {
      name: "Express.js",
      link: "https://expressjs.com/",
      icon: SiExpress,
      color: "text-gray-700 dark:text-gray-300",
    },
    {
      name: "Node.js",
      link: "https://nodejs.org/",
      icon: FaNodeJs,
      color: "text-green-600",
    },
    {
      name: "Tailwind CSS",
      link: "https://tailwindcss.com/",
      icon: FaCss3Alt,
      color: "text-blue-400",
    },
    {
      name: "Bootstrap",
      link: "https://getbootstrap.com/",
      icon: SiBootstrap,
      color: "text-purple-500",
    },
  ],
  Database: [
    {
      name: "MongoDB",
      link: "https://www.mongodb.com/",
      icon: SiMongodb,
      color: "text-green-500",
    },
    {
      name: "MySQL",
      link: "https://www.mysql.com/",
      icon: SiMysql,
      color: "text-blue-600",
    },
    {
      name: "Firestore",
      link: "https://firebase.google.com/products/firestore",
      icon: SiFirebase,
      color: "text-yellow-500",
    },
  ],
  Languages: [
    {
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
      icon: SiTypescript,
      color: "text-blue-600",
    },
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: FaCode,
      color: "text-yellow-500",
    },
    {
      name: "Java",
      link: "https://www.java.com/",
      icon: FaJava,
      color: "text-red-600",
    },
  ],
  Tools: [
    {
      name: "VS Code",
      link: "https://code.visualstudio.com/",
      icon: FaTools,
      color: "text-blue-500",
    },
    {
      name: "GitHub",
      link: "https://github.com/",
      icon: SiGithub,
      color: "text-black dark:text-white",
    },
    {
      name: "Figma",
      link: "https://www.figma.com/",
      icon: SiFigma,
      color: "text-purple-500",
    },
    {
      name: "Postman",
      link: "https://www.postman.com/",
      icon: SiPostman,
      color: "text-orange-500",
    },
    {
      name: "IntelliJ IDEA",
      link: "https://www.jetbrains.com/idea/",
      icon: SiIntellijidea,
      color: "text-blue-600",
    },
    {
      name: "Docker",
      link: "https://www.docker.com/",
      icon: SiDocker,
      color: "text-blue-500",
    },
  ],
};

const HomePage = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mt-12 md:mt-0">
            Hello, I'm a Frontend Developer & Designer
          </h1>
          <p className="mt-4 text-lg">
            I'm Krishna Kumar, a frontend developer passionate about crafting
            outstanding web and mobile apps.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-6">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="https://github.com/sahkumarkrishna"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <FaGithub size={24} />
                <span>GitHub</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="https://www.linkedin.com/in/krishna-kumar-8b28492a6/"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/resume.pdf"
                download
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <AiOutlineFilePdf size={24} />
                <span>Resume</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center mt-12"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-lg shadow-lg w-full md:w-[350px] h-[350px] object-cover"
          />
        </motion.div>
      </div>

      {/* Tech Stack Section */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold pb-4 text-gray-800 dark:text-gray-200">
          Usage
        </h3>
        <p>
          Tools, technologies and gadgets I use on a daily basis but not limited
          to.
        </p>

        {Object.entries(techData).map(([category, items]) => (
          <div key={category} className="mt-6">
            <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300">
              {category}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-3">
              {items.map(({ name, icon: Icon, color, link }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform duration-300"
                >
                  <Link to={link} className="flex flex-col items-center">
                    <Icon className={`${color} text-3xl mb-2`} />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomePage;
