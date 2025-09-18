import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TrueEmpact from "../components/layout/CarrerLayout/TrueEmpact";
import LeanLeadLive from "../components/layout/CarrerLayout/LeanLeadLive";
import JoinTalentCommunity from "../components/layout/CarrerLayout/JoinTalentCommunity";
import OpenPositions from "../components/layout/CarrerLayout/OpenPositions";
import './Careers.css'

const counters = [
  { value: "99", text: "Success in getting happy customer" },
  { value: "25", text: "Hundared of successful Software" },
  { value: "101", text: "Total clients who love JDIT" },
  { value: "4", text: "Stars reviews given by satisfied clients" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
    transition: { duration: 0.3 },
  },
};

const Careers = () => {

  const [displayCounts, setDisplayCounts] = useState(
    counters.map(() => 0)
  );
  useEffect(() => {
    const timers = counters.map((counter, i) => {
      let start = 0;
      const end = counter.value;
      const duration = 2000; // 2 seconds
      const step = end / (duration / 30); // update every 30ms

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setDisplayCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(start);
          return updated;
        });
      }, 30);
      return timer;
    });

    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  const whyWorkItems = [
    {
      title: "Innovation",
      text: "We encourage creative problem-solving and innovative thinking in every project.",
    },
    {
      title: "Growth",
      text: "We invest in our team’s professional growth with continuous learning opportunities.",
    },
    {
      title: "Culture",
      text: "Work in a friendly, collaborative, and supportive environment that values diversity.",
    },
  ];

  return (
    <div>
      {/* Banner Section */}
      <section
        style={{
          background: "url('/images/hero/carrer-hero.jpg') center/cover no-repeat",
          minHeight: "700px",   // set fixed minimum height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          padding: "0 20px",   // optional horizontal padding
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>Join Our Team</h1>
        <p
          style={{
            fontSize: "18px",
            maxWidth: "600px",
            margin: "10px auto",
          }}
        >
          Be part of a fast-growing digital solutions company and work on
          projects that make an impact.
        </p>
      </section>


      {/* Counter Section with stagger */}
      <motion.div
        className="counter-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div
          className="counter-container"
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {counters.map((item, index) => (
            <motion.div
              className="counter-card"
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                textAlign: "center",
                minWidth: "180px",
              }}
            >
              <h1
                className="counter-value"
                style={{ fontSize: "3rem", marginBottom: "8px" }}
              >
                {displayCounts[index]}
              </h1>
              <h5
                className="counter-text"
                style={{ fontSize: "1rem", color: "#555" }}
              >
                {item.text}
              </h5>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* TrueEmpact section */}
      <TrueEmpact />

      {/* leanLeadLive */}
      <LeanLeadLive />

      {/* JoinTalentCommunity */}
      <JoinTalentCommunity />

      {/* About Careers Section */}
      <section className="whyWorkSection" style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Why Work With Us?</h2>
        <motion.div
          className="whyCardsContainer"
          style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginTop: "24px" }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whyWorkItems.map((item, index) => (
            <motion.div
              className="whyCard"
              key={index}
              variants={itemVariants}
              whileHover="hover"
              style={{
                background: "#fff",
                padding: "24px",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                maxWidth: "320px",
                cursor: "pointer",
                flex: "1 1 280px",
              }}
            >
              <h3 style={{ marginBottom: "12px" }}>{item.title}</h3>
              <p style={{ color: "#555" }}>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Open Positions */}
      <OpenPositions />

      {/* Contact for Careers */}
      <section
        style={{
          padding: "60px 20px",
          backgroundColor: "#e9f7ef",
          textAlign: "center",
          borderRadius: "10px",
          maxWidth: "700px",
          margin: "40px auto",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "2.4rem",
            color: "#155724",
            marginBottom: "16px",
            fontWeight: "700",
          }}
        >
          Can’t find the right role?
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#2f5132",
            marginBottom: "32px",
            lineHeight: "1.6",
          }}
        >
          Send us your resume and we’ll get in touch when there’s a suitable opportunity.
        </p>
        <button
          style={{
            backgroundColor: "#28a745",
            color: "#fff",
            padding: "14px 36px",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontSize: "1.1rem",
            fontWeight: "600",
            boxShadow: "0 4px 15px rgba(40, 167, 69, 0.4)",
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "#218838";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(33, 136, 56, 0.6)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "#28a745";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(40, 167, 69, 0.4)";
          }}
          onClick={() => window.location.href = "mailto:hr@jditbs.com?subject=Resume Submission"}
        >
          Submit Resume
        </button>
      </section>
    </div>
  );
};

export default Careers;
