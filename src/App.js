import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="blog">
        <Companies />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
