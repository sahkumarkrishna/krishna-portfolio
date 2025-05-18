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
  SiIntellijidea,
  SiDocker,
} from "react-icons/si";
import { AiOutlineFilePdf } from "react-icons/ai";
import profileImage from "../assets/image/font.gif";

// Custom Link component for external links opening in new tab without <a>
const ExternalLink = ({ to, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(to, "_blank", "noopener,noreferrer");
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className="font-sacramento font-bold flex items-center gap-2 hover:text-blue-500"
    >
      {children}
    </Link>
  );
};

const techData = {
  "Programming Languages": [
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: FaCode,
      color: "text-yellow-500",
    },
    {
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
      icon: SiTypescript,
      color: "text-blue-600",
    },
    {
      name: "Core Java",
      link: "https://www.oracle.com/java/",
      icon: FaJava,
      color: "text-red-600",
    },
    {
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: FaCode,
      color: "text-orange-600",
    },
    {
      name: "CSS3",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: FaCss3Alt,
      color: "text-blue-500",
    },
  ],
  "Libraries & Frameworks": [
    {
      name: "React.js",
      link: "https://react.dev/",
      icon: FaReact,
      color: "text-blue-500",
    },
    {
      name: "Next.js",
      link: "https://nextjs.org/",
      icon: SiNextdotjs,
      color: "text-black dark:text-white",
    },
    {
      name: "Redux",
      link: "https://redux.js.org/",
      icon: SiRedux,
      color: "text-purple-600",
    },
    {
      name: "Node.js",
      link: "https://nodejs.org/",
      icon: FaNodeJs,
      color: "text-green-600",
    },
    {
      name: "Express.js",
      link: "https://expressjs.com/",
      icon: SiExpress,
      color: "text-gray-700 dark:text-gray-300",
    },
    {
      name: "Bootstrap",
      link: "https://getbootstrap.com/",
      icon: SiBootstrap,
      color: "text-purple-500",
    },
    {
      name: "Tailwind CSS",
      link: "https://tailwindcss.com/",
      icon: FaCss3Alt,
      color: "text-blue-400",
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
      name: "Firebase",
      link: "https://firebase.google.com/",
      icon: SiFirebase,
      color: "text-yellow-500",
    },
  ],
  "Cloud Platforms": [
    {
      name: "AWS (EC2)",
      link: "https://aws.amazon.com/",
      icon: SiDocker,
      color: "text-yellow-500",
    },

    {
      name: "Google Cloud Platform (GCP)",
      link: "https://cloud.google.com/",
      icon: SiDocker,
      color: "text-blue-500",
    },
    {
      name: "Firebase",
      link: "https://firebase.google.com/",
      icon: SiFirebase,
      color: "text-yellow-500",
    },
  ],
  "Tools & Platforms": [
    {
      name: "Git & GitHub",
      link: "https://github.com/",
      icon: SiGithub,
      color: "text-black dark:text-white",
    },
    {
      name: "Docker",
      link: "https://www.docker.com/",
      icon: SiDocker,
      color: "text-blue-500",
    },
    {
      name: "Visual Studio Code",
      link: "https://code.visualstudio.com/",
      icon: FaTools,
      color: "text-blue-500",
    },
    {
      name: "IntelliJ IDEA",
      link: "https://www.jetbrains.com/idea/",
      icon: SiIntellijidea,
      color: "text-blue-600",
    },
    {
      name: "Figma (UI/UX)",
      link: "https://www.figma.com/",
      icon: SiFigma,
      color: "text-purple-500",
    },
  ],
};

const Home = () => {
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
          <h1 className="text-4xl font-bold mt-20 md:mt-0">Hello,</h1>
          <h1 className="text-4xl font-bold mt-4 md:mt-0">
            I'm <span className="text-green-500">Full-stack</span> Developer
          </h1>

          <p className="mt-4 text-lg text-gray-700 dark:text-gray-400 text-left">
            I'm Krishna Kumar, a Full Stack Developer driven by a passion for
            crafting scalable, efficient, and intuitive digital solutions. I
            combine technical expertise with a deep understanding of user needs
            to build seamless applications that empower users and fuel business
            growth.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-6">
            <motion.div whileHover={{ scale: 1.1 }}>
              <ExternalLink to="https://github.com/sahkumarkrishna">
                <FaGithub size={24} />
                <span>GitHub</span>
              </ExternalLink>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <ExternalLink to="https://www.linkedin.com/in/krishna-kumar-8b28492a6/">
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </ExternalLink>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <ExternalLink to="/krishna resume.pdf">
                <AiOutlineFilePdf size={24} />
                <span>Resume</span>
              </ExternalLink>
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
            className="rounded-lg shadow-lg w-full md:w-[400px] h-[400px] mt-10"
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
        <h3 className=" text-3xl font-semibold pb-4 ">Tools & Technologies</h3>
        <p className="text-gray-700 dark:text-gray-400">
          A curated list of the tools, technologies, and gadgets I regularly use
          to bring my projects to life, though my toolkit is ever-evolving.
        </p>

        {Object.entries(techData).map(([category, items]) => (
          <div key={category} className="mt-6">
            <h4 className=" text-xl font-medium text-gray-700 dark:text-gray-300">
              {category}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-3">
              {items.map(({ name, icon: Icon, color, link }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer"
                >
                  <ExternalLink to={link}>
                    <Icon
                      className={`${color} text-5xl mb-2`}
                      title={name}
                      aria-label={name}
                    />
                    <span className=" text-lg">{name}</span>
                  </ExternalLink>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
