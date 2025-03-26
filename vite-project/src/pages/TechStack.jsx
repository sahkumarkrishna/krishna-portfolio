import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaCode,
  FaTools,
  FaJava,
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

const techData = {
  Technologies: [
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

export default function TechStack() {
  return (
    <div className="max-w-4xl ml-4 p-6 text-black dark:text-white">
      {Object.keys(techData).map((category) => (
        <div key={category} className="mb-6 text-left">
          <h3 className="text-xl font-semibold pb-2 text-gray-800 dark:text-gray-200">
            {category}
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {techData[category].map(({ name, link, icon: Icon, color }) => (
              <li
                key={name}
                className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg hover:scale-105 transition transform duration-300"
              >
                <Icon className={`${color} text-xl`} title={name} />
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 font-medium"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
