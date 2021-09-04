import React from "react";
import "./navbar.scss";

const sections = ["Home", "About", "Skills"];

const Navbar = ({ navigateToSection }) => {
  return (
    <div className="navbar">
      {sections.map((section, index) => {
        return (
          <button
            key={index}
            value={section}
            onClick={(event) => navigateToSection(event)}
          >
            {section}
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;
