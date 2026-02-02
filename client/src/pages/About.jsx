import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineExport } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import profileImage from "../assets/image/krishna.jpg";
import ceeras from "../assets/image/erras.webp";
import goklyn from "../assets/image/goklyn.png";
import VerticalTimeline from "../components/VerticalTimeline";
import ExperienceTimeline from "../components/ExperienceTimeline";

const About = () => {
  const handleDownload = () => {
    const resumeUrl = "/Krishna kumar.pdf";
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
      company: "Ceeras",
      role: "Frontend Developer",
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
                  to="/Krishna kumar.pdf"
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
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Qualification</h2>
          <p className="text-muted-foreground">My personal journey</p>
        </motion.div>

        <VerticalTimeline />
      </div>

      {/* Services */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What I Do</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer comprehensive development services from concept to deployment, specializing in modern web technologies and user-centered design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-20 h-20 rounded-xl object-cover border-2 border-gray-200 dark:border-gray-600"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold">
                      <button
                        onClick={() => window.open(exp.link, "_blank", "noopener,noreferrer")}
                        className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                      >
                        {exp.company}
                      </button>
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      exp.status === 'current' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                    }`}>
                      {exp.status === 'current' ? 'Current' : 'Completed'}
                    </span>
                  </div>
                  <p className="font-medium text-muted-foreground mb-2">{exp.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.date}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;