import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineExport } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import { FaGraduationCap, FaBriefcase, FaBuilding, FaMapMarkerAlt, FaLaptopCode, FaUsers, FaTrophy, FaExternalLinkAlt } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa6";
import { BsFilePdf } from "react-icons/bs";
import profileImage from "../assets/image/krishna.jpg";
import ceeras from "../assets/image/erras.webp";
import goklyn from "../assets/image/goklyn.png";
import VerticalTimeline from "../components/VerticalTimeline";
import ExperienceTimeline from "../components/ExperienceTimeline";

const About = () => {
  const handleDownload = () => {
    const resumeUrl = "/Krishna%20Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "krishna_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const services = [
    {
      id: 1,
      title: "Full Stack Development",
      description: "End-to-end web application development with modern technologies. From database design to user interface, I create complete solutions that scale.",
      icon: "⚡",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Web Design",
      description: "Modern and responsive UI/UX design with attention to detail. Creating intuitive interfaces that provide exceptional user experiences across all devices.",
      icon: "🎨",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: 3,
      title: "Web Development",
      description: "High-performance web applications built with best practices. Utilizing cutting-edge technologies to deliver fast, secure, and maintainable solutions.",
      icon: "💻",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: 4,
      title: "Server Development",
      description: "Robust backend services and APIs using Node.js, Python, and cloud technologies. Building scalable server architectures that handle high traffic loads.",
      icon: "🖥️",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const experiences = [
    {
      company: "Ceeras It Services",
      role: "Mern Stack Developer & Team Lead",
      date: "Feb 2025 - Jun 2025",
      image: ceeras,
      description: "Building and enhancing a book recommendation platform with focus on user experience and responsive design.",
      link: "https://www.ceeras.in/",
      status: "completed",
    },

    {
      company: "Goklyn Pvt. Ltd.",
      role: "Full Stack Developer & Team Lead",
      date: "Mar 2025 – May 2025",
      image: goklyn,
      description: "Led end-to-end development of OYO-style hotel booking platform, managing frontend and backend teams.",
      link: "https://goklyn.in/",
      status: "completed",
    },
  ];

  const qualifications = [
    {
      institution: "Maharishi Markandeshwar University",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      year: "2022 - 2026",
      type: "degree",
    },
    {
      institution: "Forbesganj College",
      degree: "Higher Secondary Certificate",
      field: "Science Stream",
      year: "2020 - 2022",
      type: "intermediate",
    },
    {
      institution: "Middle School, Forbesganj",
      degree: "Secondary School Certificate",
      field: "General Studies",
      year: "2018 - 2020",
      type: "school",
    },
  ];

  const certificates = [
    {
      id: 1,
      title: "GeeksforGeeks Certificate",
      issuer: "GeeksforGeeks",
      description: "Completed certification from GeeksforGeeks",
      file: "/GeeksforGeeks.pdf",
      date: "2024",
    },
    {
      id: 2,
      title: "Full Stack Development",
      issuer: "Goklyn Pvt. Ltd.",
      description: "Full Stack Developer certification from Goklyn",
      file: "/Krishna_Goklyn_Certificate .pdf",
      date: "2025",
    },
    {
      id: 3,
      title: "Participation Certificate",
      issuer: "Ceeras It Services",
      description: "Active participation certificate from Ceeras",
      file: "/- Krishna Kumar - Participation Certificate.pdf",
      date: "2025",
    },
    {
      id: 4,
      title: "Frontend Development",
      issuer: "Ceeras It Services",
      description: "Frontend Developer certification from Ceeras",
      file: "/RTY70675 - Krishna Kumar.pdf",
      date: "2025",
    },
  
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-2xl opacity-20 animate-pulse" />
              <img
                src={profileImage}
                alt="Krishna Kumar"
                className="relative rounded-2xl shadow-2xl w-96 h-[500px] object-cover"
              />
            </div>
          </motion.div>

          {/* Content - Left Side */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-4">
                👋 About Me
              </span>
            </motion.div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Krishna Kumar
              <span className="block gradient-text mt-2">Full Stack Developer</span>
            </h1>

            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                👋 Hi, I'm Krishna Kumar, a self-driven, career-oriented full-stack developer passionate about crafting outstanding web applications.
              </p>
              <p>
                I specialize in building interactive and visually stunning digital experiences using <strong>JavaScript</strong> and the <strong>MERN stack</strong>. I also have hands-on experience with developer tools like <strong>VS Code</strong>.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700/30 mb-8">
              <p className="text-lg font-medium">
                ✨ I believe that good development and seamless functionality go hand in hand to build exceptional user experiences.
              </p>
            </div>

            <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 rounded-r-lg mb-8">
              <p className="text-muted-foreground italic">
                "I'm a coder 💻 you'll probably find me sketching wireframes or obsessing over color palettes. I love collaborating with creative minds! Feel free to connect, and let's build something amazing together!"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/Krishna%20Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                >
                  <AiOutlineExport className="w-5 h-5" />
                  View Resume
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="flex items-center gap-3 px-6 py-3 border-2 border-green-500 text-green-600 dark:text-green-400 rounded-xl font-medium hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
              >
                <IoMdDownload className="w-5 h-5" />
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Qualifications */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            My <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-2">
            My educational journey and achievements that have shaped my technical expertise.
          </p>
        </motion.div>

        <VerticalTimeline />
      </div>

      {/* Services */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-2">
            I offer comprehensive development services from concept to deployment, specializing in modern web technologies and user-centered design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="absolute -top-10 -right-10 sm:top-0 sm:right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full sm:-translate-y-1/2 sm:translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative p-5 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl sm:text-3xl shadow-lg`}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                    <span className="text-xs sm:text-sm text-muted-foreground">Available for projects</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Career
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-2">
            My professional journey and the amazing companies I've had the privilege to work with.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Center Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 rounded-full" />
          
          <div className="space-y-8 md:space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left md:ml-auto'
                  }`}
                >
                  <div className={`group relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden ${
                    index % 2 === 0 ? '' : 'md:ml-auto'
                  }`}>
                    
                    {/* Gradient Glow */}
                    <div className={`absolute ${index % 2 === 0 ? '-right-10' : '-left-10'} top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br ${
                      index === 0 ? 'from-green-400/20 to-emerald-500/20' : 'from-blue-400/20 to-indigo-500/20'
                    } blur-2xl`} />
                    
                    {/* Status Badge */}
                    <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${
                        index === 0 ? 'from-green-500 to-emerald-600' : 'from-blue-500 to-indigo-600'
                      } text-white`}>
                        {exp.status === 'current' ? 'Current' : 'Completed'}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <span className={`w-2 h-2 rounded-full ${
                          index === 0 ? 'bg-green-500' : 'bg-blue-500'
                        } animate-pulse`} />
                        {exp.date}
                      </span>
                    </div>
                    
                    {/* Company */}
                    <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md ring-2 ring-white dark:ring-gray-800">
                        <img src={exp.image} alt={exp.company} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300">
                        {exp.company}
                      </h3>
                    </div>
                    
                    {/* Role */}
                    <p className={`text-sm sm:text-base font-medium ${
                      index === 0 ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'
                    } mb-3`}>
                      {exp.role}
                    </p>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    {/* Action */}
                    <div className={`pt-3 border-t border-gray-100 dark:border-gray-700 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <Link
                        to={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-medium ${
                          index === 0 ? 'text-green-600 hover:text-green-700' : 'text-blue-600 hover:text-blue-700'
                        } dark:text-green-400 transition-colors group/link`}
                      >
                        Visit Website
                        <FaExternalLinkAlt className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
                
                {/* Center Icon */}
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${
                    index === 0 ? 'from-green-500 to-emerald-600' : 'from-blue-500 to-indigo-600'
                  } flex items-center justify-center shadow-xl ring-4 ring-white dark:ring-gray-900`}
                >
                  <span className="text-white">
                    <FaBuilding className="w-5 h-5 md:w-6 md:h-6" />
                  </span>
                </motion.div>
                
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional certifications and achievements that validate my skills and expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaCertificate className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mb-4">{cert.description}</p>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs text-green-600 dark:text-green-400 font-medium">{cert.date}</span>
                <Link
                  to={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                >
                  <BsFilePdf className="w-4 h-4" />
                  View PDF
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;