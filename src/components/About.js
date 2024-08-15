import React from "react";
import "./About.css";

function About() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Julia_Shaw_2018-03-10.jpg/640px-Julia_Shaw_2018-03-10.jpg"
            alt="Profile"
            className="hero-image"
          />
        </div>
        <div className="hero-text-content">
          <h2>
            I am a product designer, indie maker, and digital nomad living in
            the internet.
          </h2>
          <p>
            Hi, I'm Steffeny. I'm a freelance product designer with 12+ years of
            experience focusing on app interfaces.
          </p>
          <button
            className="btn"
            style={{ backgroundColor: "#e7fd5a", color: "#000" }}
          >
            Download CV{" "}
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
