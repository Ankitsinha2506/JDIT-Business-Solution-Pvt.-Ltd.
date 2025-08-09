import React from "react";
import TrueEmpact from "../components/layout/CarrerLayout/TrueEmpact";
import LeanLeadLive from "../components/layout/CarrerLayout/LeanLeadLive";
import './Careers.css'
import JoinTalentCommunity from "../components/layout/CarrerLayout/JoinTalentCommunity";
import OpenPositions from "../components/layout/CarrerLayout/OpenPositions";

const cardStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    textAlign: "center",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

const cardHover = {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
};

const Careers = () => {

    const counters = [
        { value: "99", text: "Success in getting happy customer" },
        { value: "25", text: "Hundared of successful business" },
        { value: "101", text: "Total clients who love JDIT" },
        { value: "4", text: "Stars reviews given by satisfied clients" },
    ];
    return (
        <div>
            {/* Banner Section */}
            <section
                style={{
                    background: "url('/images/hero/carrer-hero.jpg') center/cover no-repeat",
                    padding: "100px 0",
                    textAlign: "center",
                    color: "#fff",
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

            {/* Counter Section */}
            <div className="counter-section">
                <div className="counter-container">
                    {counters.map((item, index) => (
                        <div className="counter-card" key={index}>
                            <h1 className="counter-value">{item.value}</h1>
                            <h5 className="counter-text">{item.text}</h5>
                        </div>
                    ))}
                </div>
            </div>

            {/* TrueEmpact section */}
            <TrueEmpact />

            {/* leanLeadLive */}
            <LeanLeadLive />

            {/* JoinTalentCommunity */}
            <JoinTalentCommunity />




            {/* About Careers Section */}
            <section className="whyWorkSection">
  <h2>Why Work With Us?</h2>
  <div className="whyCardsContainer">
    {[
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
    ].map((item, index) => (
      <div className="whyCard" key={index}>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    ))}
  </div>
</section>


            {/* Open Positions */}
            {/* <section
                style={{
                    padding: "60px 20px",
                    background: "#f0f4f8",
                    textAlign: "center",
                }}
            >
                <h2>Open Positions</h2>
                <p style={{ marginBottom: "40px" }}>
                    Explore our current job openings and apply today.
                </p>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "20px",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    {[
                        {
                            title: "React.js Developer",
                            text: "Work on cutting-edge frontend applications and deliver exceptional user experiences.",
                        },
                        {
                            title: "Java Developer",
                            text: "Build scalable backend solutions for our enterprise clients using modern frameworks.",
                        },
                    ].map((job, index) => (
                        <div
                            key={index}
                            style={cardStyle}
                            onMouseEnter={(e) =>
                                Object.assign(e.currentTarget.style, cardHover)
                            }
                            onMouseLeave={(e) =>
                                Object.assign(e.currentTarget.style, cardStyle)
                            }
                        >
                            <h3>{job.title}</h3>
                            <p>{job.text}</p>
                            <button
                                style={{
                                    background: "#007bff",
                                    color: "#fff",
                                    padding: "10px 20px",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                    marginTop: "10px",
                                }}
                            >
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section> */}
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
