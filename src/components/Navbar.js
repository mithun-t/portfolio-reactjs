import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#about">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
