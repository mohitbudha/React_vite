import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 text-center ">
      <p className="text-sm">
        © {new Date().getFullYear()} Student Manager. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
