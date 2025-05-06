import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Info from "../components/Info"; // ✅ Corrected import
import Footer from "@/components/Footer";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Info /> {/* ✅ Corrected component usage */}

      <Footer/>
    </div>
  );
};

export default Hero;
