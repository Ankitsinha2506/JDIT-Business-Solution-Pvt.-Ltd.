import React from "react";
import { motion } from "framer-motion";
import joinImage from "../../../assets/images/JoinTalentCommunity.jpeg";
import "./JoinTalentCommunity.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const JoinTalentCommunity = () => {
  return (
    <motion.section
      className="jointalentCommunity"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="row flex-row align-items-center">
          <motion.div className="col-sm-4" variants={itemVariants}>
            <img
              src={joinImage}
              alt="Join Talent Community"
              className="img-fluid join-image"
            />
          </motion.div>

          <motion.div className="col-sm-8 content-section" variants={itemVariants}>
            <h1 className="commonTitle__title">
              Join Our Talent Community<span className="theme-color">.</span>
            </h1>
            <div className="description-text">
              <p>
                Stay connected by joining our network! Enter your e-mail and tell us a
                bit about yourself, and we'll keep you informed about upcoming events,
                exclusive workshops, career opportunities, and networking sessions
                tailored to your interests.
              </p>
              <p>
                Be the first to hear about industry insights, expert talks, and resources
                designed to help you grow professionally and personally. Join us to build
                meaningful connections and unlock your potential with a community that
                supports your journey.
              </p>
            </div>
            <button
              className="btn btn-danger rounded-pill px-5 py-3"
              onClick={() => (window.location.href = "mailto:hr@jditbs.com")}
            >
              Join us
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default JoinTalentCommunity;
