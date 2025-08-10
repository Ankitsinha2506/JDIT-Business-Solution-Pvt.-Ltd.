import React, { useState } from "react";
import { motion } from "framer-motion";
import "./OpenPositions.css";

const jobs = [
  {
    title: "React.js Developer",
    text: "Work on cutting-edge frontend applications and deliver exceptional user experiences.",
  },
  {
    title: "Java Developer",
    text: "Build scalable backend solutions for our enterprise clients using modern frameworks.",
  },
  {
    title: "React Native Developer",
    text: "Develop cross-platform mobile applications with smooth performance and native feel.",
  },
  {
    title: "Node.js Developer",
    text: "Create fast, scalable server-side applications using JavaScript and Node.js runtime.",
  },
  {
    title: "Python Developer",
    text: "Design and develop backend services and APIs using Python frameworks like Django and Flask.",
  },
  {
    title: "Android Developer",
    text: "Build and maintain native Android apps using Java or Kotlin with a focus on user engagement.",
  },
  {
    title: "iOS Developer",
    text: "Create native iOS applications using Swift or Objective-C for a seamless user experience.",
  },
  {
    title: "DevOps Engineer",
    text: "Automate infrastructure, streamline deployments, and ensure system reliability in cloud environments.",
  },
  {
    title: "Full Stack Developer",
    text: "Work across frontend and backend to deliver complete web solutions using diverse tech stacks.",
  },
  {
    title: "Data Engineer",
    text: "Develop and maintain data pipelines, enabling efficient data storage and analysis.",
  },
  {
    title: "Machine Learning Engineer",
    text: "Design, implement, and optimize machine learning models for various AI-driven applications.",
  },
  {
    title: "Game Developer",
    text: "Create engaging games using popular engines like Unity or Unreal Engine for multiple platforms.",
  },
];

const roleCategories = [
  {
    category: "Backend Development Roles",
    roles: [
      "Java Developer",
      "Node.js Developer",
      "Python Developer (Django, Flask)",
      "PHP Developer",
      "Ruby on Rails Developer",
      ".NET Developer (C#)",
      "Go Developer",
      "Scala Developer",
      "Kotlin Developer (Backend)",
      "C/C++ Developer (System/Embedded)",
    ],
  },
  {
    category: "Frontend Development Roles",
    roles: [
      "React.js Developer",
      "Angular Developer",
      "Vue.js Developer",
      "JavaScript Developer",
      "HTML/CSS Developer",
      "Web Designer (UI/UX focus)",
      "TypeScript Developer",
    ],
  },
  {
    category: "Full Stack Development Roles",
    roles: [
      "Full Stack Developer (e.g., MERN Stack, MEAN Stack)",
      "MEAN Stack Developer (MongoDB, Express, Angular, Node.js)",
      "MERN Stack Developer (MongoDB, Express, React, Node.js)",
      "LAMP Stack Developer (Linux, Apache, MySQL, PHP)",
    ],
  },
  {
    category: "Mobile App Development Roles",
    roles: [
      "Android Developer (Java/Kotlin)",
      "iOS Developer (Swift/Objective-C)",
      "React Native Developer",
      "Flutter Developer",
      "Xamarin Developer",
      "Mobile Game Developer (Unity, Unreal Engine)",
    ],
  },
  {
    category: "DevOps & Cloud Roles",
    roles: [
      "DevOps Engineer",
      "Cloud Engineer (AWS, Azure, GCP)",
      "Site Reliability Engineer (SRE)",
      "Infrastructure Engineer",
      "Kubernetes Engineer",
      "CI/CD Engineer",
    ],
  },
  {
    category: "Data & AI Development Roles",
    roles: [
      "Data Engineer",
      "Machine Learning Engineer",
      "AI Developer",
      "Data Scientist (with coding focus)",
      "Big Data Developer (Hadoop, Spark)",
    ],
  },
  {
    category: "Game Development Roles",
    roles: [
      "Game Developer (C++, C#)",
      "Unity Developer",
      "Unreal Engine Developer",
      "AR/VR Developer",
    ],
  },
  {
    category: "Other Specialized Development Roles",
    roles: [
      "Database Developer (SQL, NoSQL)",
      "Blockchain Developer",
      "Embedded Systems Developer",
      "Security Software Developer",
      "API Developer",
      "Software Test Automation Developer (SDET)",
      "CRM Developer (Salesforce, Microsoft Dynamics)",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.04, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" },
};

const OpenPositions = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.section
      className="openPositionsSection"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2>Open Positions</h2>
      <p>Explore our current job openings and apply today.</p>

      <motion.div className="jobCardsContainer">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            className="jobCard"
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={hoveredIndex === index ? "hover" : "visible"}
          >
            <h3>{job.title}</h3>
            <p>{job.text}</p>
            <button
              className="applyButton"
              onClick={() => (window.location.href = "mailto:hr@jditbs.com")}
            >
              Apply Now
            </button>
          </motion.div>
        ))}
      </motion.div>

      <div className="roleCategoriesContainer">
        {roleCategories.map(({ category, roles }, idx) => (
          <div className="roleCategory" key={idx}>
            <h3>{category}</h3>
            <ul>
              {roles.map((role, i) => (
                <li key={i}>{role}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default OpenPositions;
