import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTimes,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaCogs,
} from "react-icons/fa";
import { ModeToggle } from "./ModeToggle";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "underline" : "");

  return (
    <nav className="fixed top-0 left-0 w-full p-4 flex items-center justify-between z-50 transition-all bg-white text-zinc-600 dark:bg-zinc-700 dark:text-white">
      <Link
        to="/"
        className="text-2xl dark:text-white text-zinc-700 hover:text-zinc-900 border-2 px-6 py-2"
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
              className={`${isActive("/projects")} hover:opacity-75`}
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

      {/* ✅ Between controls (Dark Mode Toggle + Menu Button) */}
      <div className="flex items-center gap-4">
        <ModeToggle />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <RiMenu3Line />}
        </button>
      </div>

      {/* ✅ Mobile Top Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-black text-black dark:text-white 
  transform ${menuOpen ? "translate-y-0" : "-translate-y-full"} 
  transition-transform duration-300 ease-in-out sm:hidden z-40 shadow-lg`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-3xl"
        >
          <FaTimes />
        </button>

        <ul className="flex flex-col items-start pt-24 px-6 gap-4 text-lg w-full">
          <li className="w-full">
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 ${isActive("/about")}`}
            >
              <FaUser className="text-xl" /> About
            </Link>
            <hr className="my-2 border-gray-300 dark:border-gray-700 w-full" />
          </li>
          <li className="w-full">
            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 ${isActive("/projects")}`}
            >
              <FaProjectDiagram className="text-xl" /> Projects
            </Link>
            <hr className="my-2 border-gray-300 dark:border-gray-700 w-full" />
          </li>
          <li className="w-full">
            <Link
              to="/Services"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 ${isActive("/Services")}`}
            >
              <FaCogs className="text-xl" /> Services
            </Link>
            <hr className="my-2 border-gray-300 dark:border-gray-700 w-full" />
          </li>
          <li className="w-full">
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
