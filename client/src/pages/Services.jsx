import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiDocker,
  SiAwsamplify,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const services = [
  {
    name: "Frontend Development",
    description: "Building responsive and interactive UIs using React.js, HTML5, CSS3, and JavaScript.",
    icon: SiReact,
    color: "text-cyan-500",
  },
  {
    name: "Backend Development",
    description: "Creating RESTful APIs and server-side logic using Node.js and Express.js.",
    icon: SiNodedotjs,
    color: "text-green-600",
  },
  {
    name: "Database Management",
    description: "Designing scalable databases using MongoDB and SQL for optimal data storage.",
    icon: SiMongodb,
    color: "text-green-700",
  },
  {
    name: "API Integration",
    description: "Connecting applications through secure and efficient third-party API integrations.",
    icon: SiExpress,
    color: "text-gray-800",
  },
  {
    name: "Containerization & DevOps",
    description: "Using Docker and CI/CD tools to create portable, reproducible development environments.",
    icon: SiDocker,
    color: "text-blue-600",
  },
  {
    name: "Cloud Services",
    description: "Deploying and managing scalable apps using AWS Amplify and cloud platforms.",
    icon: SiAwsamplify,
    color: "text-yellow-500",
  },
  {
    name: "Tailwind CSS Styling",
    description: "Building modern UIs using Tailwind CSS for maintainable, scalable designs.",
    icon: SiTailwindcss,
    color: "text-sky-500",
  },
  {
    name: "Firebase Services",
    description: "Using Firebase for real-time databases, authentication, hosting, and analytics.",
    icon: SiFirebase,
    color: "text-orange-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const ServiceCard = ({ name, description, Icon, color, index }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={cardVariants}
  >
    <Card className="text-center hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <Icon className={`mx-auto mb-4 ${color}`} size={48} />
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const Service= () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-4 mt-16"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-700 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        From concept to deployment, I offer end-to-end full stack development
        solutions that are secure, scalable, and user-centric.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ name, description, icon: Icon, color }, i) => (
          <ServiceCard
            key={name}
            name={name}
            description={description}
            Icon={Icon}
            color={color}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
