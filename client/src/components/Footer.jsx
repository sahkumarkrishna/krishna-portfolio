import React from "react";

const Footer = () => {
  return (
    <footer className="font-sacramento flex justify-center gap-4 p-4 mt-5">
      &copy; {new Date().getFullYear()} Krishna Kumar. All Rights Reserved.
    </footer>
  );
};

export default Footer;
