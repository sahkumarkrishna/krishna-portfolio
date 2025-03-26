import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineExport } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import profileImage from "../assets/image/image.jpg";
import ceeras from "../assets/image/erras.webp";
import goklyn from "../assets/image/goklyn.png";

const About = () => {
  const handleDownload = () => {
    const resumeUrl = "/resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  const services = [
    {
      id: 1,
      title: "Full Stack Development",
      description:
        "Driving brand growth through creative strategies and audience targeting.",
      icon: "⚡",
    },
    {
      id: 2,
      title: "Web Design",
      description:
        "The most modern and high-quality design made at a professional level.",
      icon: "🖌",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "High-quality development of sites at the professional level.",
      icon: "💻",
    },
    {
      id: 4,
      title: "Graphic Designing",
      description:
        "Crafting visually stunning designs that capture your brand's essence.",
      icon: "🎨",
    },
  ];

  const experiences = [
    {
      company: "Ceeras",
      role: "Frontend Developer",
      date: "Feb 25 - Present",
      image: ceeras,
      description:
        "Developing and optimizing user-friendly interfaces using React and Tailwind CSS. Collaborating with backend developers to integrate APIs and enhance UI/UX performance.",
    },
    {
      company: "Goklyn",
      role: "Full Stack Developer",
      date: "May 15 - Present",
      image: goklyn,
      description:
        "Building and maintaining scalable web applications using the MERN stack. Implemented authentication, database optimization, and real-time features for improved user experience.",
    },
  ];

  const qualifications = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Engineering",
      institution: "XYZ University",
      year: "2022 - 2026",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science",
      institution: "ABC Senior Secondary School",
      year: "2020 - 2022",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      field: "General Education",
      institution: "ABC Senior Secondary School",
      year: "2018 - 2020",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
        >
          <img
            src={profileImage}
            alt="Krishna Kumar"
            className="rounded-lg shadow-lg w-full md:w-[350px] h-[350px] object-cover border-4 border-blue-600 mt-20"
          />
        </motion.div>

        {/* About Me Section */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mt-12">
            About Me
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            👋 Hi, I'm{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Krishna Kumar
            </span>
            , a self-driven, career-oriented full-stack developer passionate
            about crafting outstanding web applications.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            I specialize in building interactive and visually stunning digital
            experiences, primarily working with technologies like{" "}
            <strong className="text-blue-600 dark:text-blue-400">
              JavaScript, TypeScript, Next.js, and the MERN stack
            </strong>
            . I also have hands-on experience with UI/UX design tools like{" "}
            <strong className="text-blue-600 dark:text-blue-400">Figma</strong>.
          </p>
          {/* Belief Statement */}
          <div className="mt-6 p-4 border-l-4 border-blue-600 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
              ✨ I believe good design and functionality are equally important.
              My goal is to create visually appealing experiences that are
              intuitive and user-friendly.
            </p>
          </div>

          {/* Fun Fact */}
          <div className="mt-6 p-4">
            <p className="text-lg text-gray-800 dark:text-gray-300">
              When I'm not coding, you'll probably find me sketching wireframes
              or obsessing over color palettes (seriously, it's an addiction
              😁).
            </p>
            <p className="mt-2 text-lg text-gray-800 dark:text-gray-300">
              I love collaborating with creative minds! Feel free to connect,
              and let's build something amazing together!
            </p>
          </div>

          {/* Resume Links */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-lg border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
              >
                <AiOutlineExport size={24} />
                <span>View Resume</span>
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={handleDownload}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center gap-2 text-lg font-semibold shadow-md transition-all"
            >
              <IoMdDownload size={24} />
              <span>Download Resume</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Qualification Section */}
      <h2 className="text-2xl font-bold mb-6 mt-12">Qualification</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {qualifications.map((qual, index) => (
          <div
            key={index}
            className="p-4 border-l-4 rounded-lg shadow-md flex gap-4"
          >
            <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400">
              {qual.degree}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {qual.field}
            </p>
            <p className="text-xs text-gray-500">
              {qual.institution} | {qual.year}
            </p>
          </div>
        ))}
      </div>

      {/* What I'm Doing Section */}
      <h2 className="text-2xl font-bold mb-6 mt-12">What I'm Doing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-4 border-l-4 rounded-lg shadow-md flex gap-4"
          >
            <span className="text-yellow-400 text-3xl">{service.icon}</span>
            <div>
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p className=" text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <h2 className="text-2xl font-bold mb-6 mt-12">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-4 border-l-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex gap-4"
          >
            <img
              src={exp.image}
              alt={exp.company}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-bold text-lg">{exp.company}</h3>
              <p className="text-sm text-gray-600">{exp.role}</p>
              <p className="text-xs text-gray-500">{exp.date}</p>
              <p className="text-sm mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
