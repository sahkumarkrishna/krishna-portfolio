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
import { FaCode, FaRocket, FaUsers, FaCog } from "react-icons/fa";

const services = [
  {
    name: "Frontend Development",
    description: "Building responsive and interactive UIs using React.js, HTML5, CSS3, and modern JavaScript frameworks.",
    icon: SiReact,
    color: "text-cyan-500",
    gradient: "from-cyan-500 to-blue-600",
    features: ["React.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
  },
  {
    name: "Backend Development",
    description: "Creating robust RESTful APIs and server-side logic using Node.js, Express.js, and modern backend technologies.",
    icon: SiNodedotjs,
    color: "text-green-600",
    gradient: "from-green-500 to-emerald-600",
    features: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    name: "Database Management",
    description: "Designing scalable databases using MongoDB, MySQL, and implementing efficient data storage solutions.",
    icon: SiMongodb,
    color: "text-green-700",
    gradient: "from-green-600 to-teal-600",
    features: ["MongoDB", "MySQL", "Data Modeling", "Query Optimization"],
  },
  {
    name: "Full Stack Solutions",
    description: "End-to-end web application development combining frontend and backend technologies seamlessly.",
    icon: FaCode,
    color: "text-purple-600",
    gradient: "from-purple-500 to-pink-600",
    features: ["MERN Stack", "Full Stack", "Integration", "Deployment"],
  },
  {
    name: "Cloud & DevOps",
    description: "Deploying and managing scalable applications using AWS, Docker, and modern DevOps practices.",
    icon: SiDocker,
    color: "text-blue-600",
    gradient: "from-blue-500 to-indigo-600",
    features: ["AWS", "Docker", "CI/CD", "Cloud Deployment"],
  },
  {
    name: "UI/UX Design",
    description: "Creating modern, user-friendly interfaces with attention to detail and optimal user experience.",
    icon: SiTailwindcss,
    color: "text-sky-500",
    gradient: "from-sky-500 to-blue-600",
    features: ["UI Design", "UX Research", "Prototyping", "User Testing"],
  },
];

const stats = [
  { number: "50+", label: "Projects Completed", icon: FaRocket },
  { number: "500+", label: "Users Served", icon: FaUsers },
  { number: "3+", label: "Years Experience", icon: FaCog },
  { number: "99%", label: "Client Satisfaction", icon: FaCode },
];

const Service = () => {
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
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
            💼 My Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What I <span className="gradient-text">Offer</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, I offer end-to-end full stack development solutions 
            that are secure, scalable, and user-centric.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Development Process</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discovery", desc: "Understanding your requirements and goals" },
            { step: "02", title: "Design", desc: "Creating wireframes and visual designs" },
            { step: "03", title: "Development", desc: "Building with modern technologies" },
            { step: "04", title: "Deployment", desc: "Testing, optimization, and launch" },
          ].map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                {process.step}
              </div>
              <h3 className="font-bold mb-2">{process.title}</h3>
              <p className="text-sm text-muted-foreground">{process.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700/30">
            <FaRocket className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Let's discuss your ideas and bring them to life with modern web technologies.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
              <FaRocket className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;