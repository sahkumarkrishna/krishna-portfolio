import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiDocker,
  SiTailwindcss,
} from "react-icons/si";
import { FaCode, FaRocket, FaPalette, FaServer, FaCloud, FaDesktop, FaCheckCircle, FaArrowRight, FaLightbulb, FaCogs, FaRocket as FaLaunch, FaStar } from "react-icons/fa";

const services = [
   {
    name: "Full Stack Solutions",
    description: "End-to-end web application development combining frontend and backend technologies seamlessly.",
    icon: FaCode,
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    features: ["MERN Stack", "Full Stack", "Integration", "Deployment"],
    badge: "Featured",
  },
  {
    name: "Frontend Development",
    description: "Building responsive and interactive UIs using React.js, HTML5, CSS3, and modern JavaScript frameworks.",
    icon: SiReact,
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-500/10 to-blue-500/10",
    features: ["React.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    badge: "Popular",
  },
  {
    name: "Backend Development",
    description: "Creating robust RESTful APIs and server-side logic using Node.js, Express.js, and modern backend technologies.",
    icon: SiNodedotjs,
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    features: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    badge: null,
  },
  {
    name: "Database Management",
    description: "Designing scalable databases using MongoDB, MySQL, and implementing efficient data storage solutions.",
    icon: SiMongodb,
    gradient: "from-green-600 to-teal-600",
    bgGradient: "from-green-600/10 to-teal-600/10",
    features: ["MongoDB", "MySQL", "Data Modeling", "Query Optimization"],
    badge: null,
  },
 
  {
    name: "Cloud & DevOps",
    description: "Deploying and managing scalable applications using AWS, Docker, and modern DevOps practices.",
    icon: FaCloud,
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-500/10 to-indigo-500/10",
    features: ["AWS", "Docker", "CI/CD", "Cloud Deployment"],
    badge: null,
  },
  {
    name: "UI/UX Design",
    description: "Creating modern, user-friendly interfaces with attention to detail and optimal user experience.",
    icon: FaPalette,
    gradient: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-500/10 to-rose-500/10",
    features: ["UI Design", "UX Research", "Prototyping", "User Testing"],
    badge: null,
  },
];

const stats = [
  { number: "50+", label: "Projects Completed", gradient: "from-green-500 to-emerald-600" },
  { number: "500+", label: "Users Served", gradient: "from-blue-500 to-indigo-600" },
  { number: "Fresher", label: "Experience Level", gradient: "from-purple-500 to-pink-600" },
  { number: "99%", label: "Client Satisfaction", gradient: "from-orange-500 to-red-600" },
];

const processSteps = [
  { 
    step: "01", 
    title: "Discovery", 
    desc: "Understanding your requirements and goals through detailed consultation",
    icon: FaLightbulb,
    gradient: "from-yellow-500 to-orange-500"
  },
  { 
    step: "02", 
    title: "Design", 
    desc: "Creating wireframes and visual designs that match your vision",
    icon: FaPalette,
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    step: "03", 
    title: "Development", 
    desc: "Building with modern technologies and best practices",
    icon: FaCogs,
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    step: "04", 
    title: "Launch", 
    desc: "Testing, optimization, and successful deployment",
    icon: FaRocket,
    gradient: "from-green-500 to-emerald-500"
  },
];

const Service = () => {
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
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            💼 Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            What I <span className="gradient-text">Offer</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            From concept to deployment, I offer end-to-end full stack development solutions 
            that are secure, scalable, and user-centric.
          </p>
        </motion.div>

        {/* Stats Section - Modern Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Number */}
              <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
              
              {/* Decorative Circle */}
              <div className={`absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br ${stat.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid - Modern Cards */}
        <div className="mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">My Expertise</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Professional services tailored to your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Decorative Circle */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-10 group-hover:scale-150 transition-transform duration-700`} />
                  
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white bg-gradient-to-r ${service.gradient}`}>
                        {service.badge === "Popular" ? "⭐ Popular" : "✨ Featured"}
                      </span>
                    </div>
                  )}
                  
                  <div className="relative">
                    {/* Service Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-5 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </motion.div>

                    {/* Service Content */}
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4 sm:mb-5">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <FaCheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 text-gradient-to-r ${service.gradient} flex-shrink-0`} style={{ color: service.gradient.includes('cyan') ? '#06b6d4' : service.gradient.includes('green') && service.gradient.includes('emerald') ? '#10b981' : service.gradient.includes('green') ? '#059669' : service.gradient.includes('purple') ? '#a855f7' : service.gradient.includes('blue') ? '#3b82f6' : '#ec4899' }} />
                          <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group/link`}
                    >
                      Learn More
                      <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Process Section - Timeline Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="inline-block px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs sm:text-sm font-medium mb-3">
              🚀 Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">My Development Process</h2>
            <p className="text-sm sm:text-base text-muted-foreground">A systematic approach to deliver exceptional results</p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-8 sm:top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-500 via-blue-500 via-purple-500 to-green-500 rounded-full hidden md:block" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {processSteps.map((process, index) => {
                const Icon = process.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -5 }}
                    className="relative text-center p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    {/* Step Number */}
                    <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${process.gradient} text-white font-bold text-sm sm:text-base flex items-center justify-center shadow-lg z-10`}>
                      {process.step}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${process.gradient} flex items-center justify-center mx-auto mb-3 sm:mb-4 mt-2 sm:mt-3`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{process.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{process.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative px-4"
        >
          <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 dark:from-green-900/20 dark:via-blue-900/20 dark:to-purple-900/20 border border-gray-200 dark:border-gray-700 overflow-hidden">
            
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
            
            <div className="relative text-center">
              <FaRocket className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 dark:text-green-400 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Ready to Start Your Project?</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 max-w-md mx-auto">
                Let's discuss your ideas and bring them to life with modern web technologies. I'm excited to work with you!
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
              >
                Get Started Today
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
