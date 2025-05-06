import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineExport } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import profileImage from "../assets/image/krishna.jpg";
import ceeras from "../assets/image/erras.webp";
import goklyn from "../assets/image/goklyn.png";

const About = () => {
  const handleDownload = () => {
    const resumeUrl = "/resume.pdf"; // Ensure the correct file path
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf"; // Set the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
  ];

  const experiences = [
    {
      company: "Ceeras",
      role: "Frontend Developer",
      date: "Feb 25 - Present",
      image: ceeras,
      description:
        "Building and enhancing a book recommendation platform with a focus on creating a user-friendly interface and implementing responsive design features to improve the overall user experience.",
      link: "https://www.ceeras.in/", // Added link to Ceeras
    },
    {
      company: "Goklyn",
      role: "Full Stack Developer & Team Lead",
      date: "May 15 - Present",
      image: goklyn,
      description:
        "Spearheading the development of a comprehensive OYO-style hotel booking platform and e-commerce website. Overseeing both frontend and backend development while ensuring seamless functionality and an intuitive user interface.",
      link: "https://goklyn.in/", // Added link to Goklyn
    },
  ];

  const qualifications = [
    {
      institution: "Maharishi Markandeshwar (Deemed to be) University, Ambala",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      year: "2022 - 2026",
    },
    {
      institution: "Forbesganj College, Forbesganj",
      degree: "Higher Secondary Certificate (HSC)",
      field: "Intermediate",
      year: "2020 - 2022",
    },
    {
      institution: "Middle School, Forbesganj",
      degree: "Secondary School Certificate (SSC)",
      field: "Matriculation ",
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
            className="rounded-lg shadow-lg w-full md:w-[350px] h-[350px] object-cover  mt-24"
          />
        </motion.div>

        {/* About Me Section */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mt-16">
            <h1 className="font-sacramento text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white text-left">
              About Me
            </h1>

            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 text-left">
              👋 Hi, I'm{" "}
              <span className="font-semibold text-gray-500 dark:text-gray-400">
                Krishna Kumar
              </span>
              , a self-driven, career-oriented full-stack developer passionate
              about crafting outstanding web applications.
            </p>

            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 text-left">
              I specialize in building interactive and visually stunning digital
              experiences, primarily working with technologies like{" "}
              <strong className="text-gray-500 dark:text-gray-400">
                JavaScript, TypeScript, Next.js, and the MERN stack
              </strong>
              . I also have hands-on experience with UI/UX design tools like{" "}
              <strong className="text-gray-500 dark:text-gray-400">
                Figma
              </strong>
              .
            </p>

            <div className="mt-6 p-4 border-l-4 border-gray-600 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-left">
              <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
                ✨ I believe good design and functionality are equally
                important. My goal is to create visually appealing experiences
                that are intuitive and user-friendly.
              </p>
            </div>

            <div className="mt-6 p-4 text-left">
              <p className="text-lg text-gray-500 dark:text-gray-400">
                When I'm not coding, you'll probably find me sketching
                wireframes or obsessing over color palettes (seriously, it's an
                addiction 😁).
              </p>
              <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
                I love collaborating with creative minds! Feel free to connect,
                and let's build something amazing together!
              </p>
            </div>
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
                className="font-sacramento  flex items-center gap-2 text-gray-800 dark:text-white  font-semibold text-lg border  px-4 py-2 rounded-lg   transition-all"
              >
                <AiOutlineExport size={24} />
                <span>View Resume</span>
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={handleDownload}
              className=" font-sacramento w-full sm:w-auto  dark:text-white  text-gray-800 py-2 px-4 rounded-lg flex items-center gap-2 text-lg font-semibold shadow-md border transition-all"
            >
              <IoMdDownload size={24} />
              <span>Download Resume</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Qualification Section */}

      <h2 className="font-sacramento  text-3xl font-semibold mb-6 mt-12 text-gray-800 dark:text-gray-200">
        Qualification
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {qualifications.map((qual, index) => (
          <div
            key={index}
            className=" font-sacramento font-bold p-6 border-l-4 text-gray-500 dark:text-gray-400rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white ">
              {qual.institution}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {qual.degree}
            </p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
              {qual.field}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {qual.year}
            </p>
          </div>
        ))}
      </div>

      {/* What I'm Doing Section */}
      <h2 className="font-sacramento  text-3xl font-semibold mb-8 mt-16 text-gray-800 dark:text-gray-200">
        What I'm Doing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="font-sacramento font-bold p-6 border-l-4 text-gray-500 dark:text-gray-400 dark:bg-gray-700 rounded-lg shadow-lg flex items-start gap-4"
          >
            <div className="text-yellow-400 text-4xl">{service.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <h2 className="font-sacramento  text-3xl font-semibold mb-6 mt-12 text-gray-800 dark:text-gray-200">
        Work Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="font-sacramento font-bold p-6 border-l-4 border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg flex gap-6 items-center"
          >
            <img
              src={exp.image}
              alt={exp.company}
              className="w-20 h-20 object-cover rounded-lg border-2 text-gray-500 dark:text-gray-400"
            />
            <div className="flex flex-col">
              {/* Make company name a clickable link */}
              <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
                <span
                  onClick={() =>
                    window.open(exp.link, "_blank", "noopener,noreferrer")
                  }
                  className="hover:underline text-blue-600 cursor-pointer"
                >
                  {exp.company}
                </span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.role}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {exp.date}
              </p>
              <hr className="my-2 text-gray-500 dark:text-gray-400" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
