import React from "react";
import ProjectSection from "../layout/ProjectSection";
import projects from "../../data/ProjectsData";

const Projects = () => {
  return (
    <div className="container-fluid project py-5 mb-5">
      <div className="container">
        <div
          className="text-center mx-auto pb-5"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="text-primary">Our Project</h5>
          <h1>Our Recently Completed Projects</h1>
        </div>
        <div className="row g-5">
          {projects.map(({ id, img, technology, title, description }) => (
            <ProjectSection
              key={id}
              img={img}
              technology={technology}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
