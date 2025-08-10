import React from "react";
import projects from "../../data/ProjectsData";

const Projects = () => {
  return (
    <div className="w-full bg-white py-12 mb-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mx-auto pb-8 max-w-xl">
          <h5 className="text-primary text-lg font-semibold">Our Project</h5>
          <h1 className="text-3xl font-bold">Our Recently Completed Projects</h1>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ id, img, technology, title, description }) => (
            <div
              key={id}
              className="relative group overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image with zoom on hover */}
              <img
                src={img}
                alt={title}
                className="w-full h-64 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* Default overlay */}
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2 font-semibold transition-opacity duration-300 group-hover:opacity-0">
                {technology}
              </div>

              {/* Hover overlay with fade-in & slide-up */}
              <div className="absolute inset-0 bg-black bg-opacity-75 text-white flex flex-col justify-center items-center text-center px-4 opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                <h4 className="text-lg font-bold mb-2 animate-fadeIn">
                  {title}
                </h4>
                <p className="text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
