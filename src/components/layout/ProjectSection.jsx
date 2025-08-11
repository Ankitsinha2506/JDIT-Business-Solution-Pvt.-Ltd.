import React from "react";

const ProjectSection = ({ img, technology, title, description }) => {
  return (
    <div
      className="col-md-6 col-lg-4"
      style={{ cursor: "pointer", position: "relative" }}
    >
      <div
        className="project-item"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        <img
          src={img}
          alt={title}
          className="img-fluid w-100"
          style={{ display: "block", borderRadius: "8px" }}
        />

        {/* Default overlay showing technology */}
        <div
          className="overlay-default"
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            background: "rgba(0, 0, 0, 0.6)",
            color: "#fff",
            textAlign: "center",
            padding: "10px",
            fontWeight: "600",
            transition: "opacity 0.3s ease",
          }}
        >
          {technology}
        </div>

        {/* Hover overlay showing title and description */}
        <div
          className="overlay-hover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.75)",
            color: "#fff",
            padding: "20px",
            opacity: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            transition: "opacity 0.3s ease",
            borderRadius: "8px",
          }}
        >
          <h4 style={{ marginBottom: "10px" }}>{title}</h4>
          <p>{description}</p>
        </div>

        <style>
          {`
            .project-item:hover .overlay-hover {
              opacity: 1;
            }
            .project-item:hover .overlay-default {
              opacity: 0;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default ProjectSection;
