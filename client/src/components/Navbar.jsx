import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaCogs,
} from "react-icons/fa";
import { ModeToggle } from "./ModeToggle";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "underline" : "");

  return (
    <nav className="fixed top-0 left-0 w-full p-4 flex items-center justify-between z-50 transition-all bg-white text-black dark:bg-black dark:text-white">
      <Link
        to="/"
        className="text-2xl dark:text-white text-zinc-700 hover:text-zinc-900 border-2 px-6 py-2 "
      >
        Krishna Kumar
      </Link>

      {/* ✅ Desktop Menu */}
      <div className="hidden sm:flex flex-1 justify-center">
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link
              to="/about"
              className={`${isActive("/about")} hover:opacity-75`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={` ${isActive("/projects")} hover:opacity-75`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Services"
              className={`${isActive("/Services")} hover:opacity-75`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${isActive("/contact")} hover:opacity-75`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* ✅ Right-side controls (Dark Mode Toggle + Menu Button) */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle - Always visible */}
        <ModeToggle />

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ✅ Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-white dark:bg-black bg-opacity-95 
        text-black dark:text-white flex flex-col items-start pt-20 pl-6 gap-6 
        transform ${menuOpen ? "translate-x-0" : "translate-x-full"} 
        transition-transform duration-300 ease-in-out sm:hidden shadow-lg`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-3xl"
        >
          <FaTimes />
        </button>

        <ul className="text-lg space-y-4">
          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 ${isActive("/about")}`}
            >
              <FaUser className="text-xl" /> About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 ${isActive("/projects")}`}
            >
              <FaProjectDiagram className="text-xl" /> Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Services"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 ${isActive("/Services")}`}
            >
              <FaCogs className="text-xl" /> Services
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 ${isActive("/contact")}`}
            >
              <FaEnvelope className="text-xl" /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
