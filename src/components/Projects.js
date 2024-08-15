import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Phone Mockup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/IPhone_XS.jpg/800px-IPhone_XS.jpg",
      category: "BRANDING",
    },
    {
      id: 2,
      title: "A Branch with Flowers",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/IPhone_4s.jpg/800px-IPhone_4s.jpg",
      category: "MOCKUP",
    },
    {
      id: 3,
      title: "iPhone 15 Mockup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/IPhone_4s_Rear_Side.jpg/800px-IPhone_4s_Rear_Side.jpg",
      category: "VIDEO",
    },
    {
      id: 4,
      title: "Brand Identity",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/IPhone_under_red_light_%284262220105%29.jpg/800px-IPhone_under_red_light_%284262220105%29.jpg",
      category: "BRANDING",
    },
  ];

  return (
    <section className="projects">
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <span className="project-category">{project.category}</span>
              <div className="project-info">
                <h3>{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
