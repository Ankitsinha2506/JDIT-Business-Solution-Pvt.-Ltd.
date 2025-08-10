import React from "react";
import { motion } from "framer-motion";
import "./LeanLeadLive.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const LeanLeadLive = () => {
  return (
    <motion.section
      className="leanLeadLive"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="row no-gutters">
          {[
            {
              title: "Learn",
              subtitle: "Push the boundaries of your horizon everyday",
              items: [
                "Purposeful career learning curve: Capitalize on your opportunities with a slew of upskilling and niche technical programs, and apply them at your work",
                "Empowered intrapreneurship: Feel empowered to make a difference in any industry and have a clear voice in the organization",
                "The power of collaboration: We celebrate weaknesses at JDIT as they are superpowers waiting to manifest themselves",
              ],
              className: "learn_box",
            },
            {
              title: "Lead",
              subtitle: "Be the outlier out to change the world",
              items: [
                "Inclusive diversity: Regardless of who you were, you will thrive among outliers who come with a diverse set of skills and ideas",
                "Equal opportunity leadership programs: Women are actively empowered as leaders, regardless of being a fresher, mother or a veteran returning to work",
                "Collective and strategic social change: The spirit of doing good in meaningful ways is woven into our culture through the JDIT Social Welfare Foundation",
              ],
              className: "lead_box",
            },
            {
              title: "Live/Leap",
              subtitle: "Live and breathe technology with its impact spanning generations",
              items: [
                "Question everything: You are constantly challenged to think outside the box, so that you can have the freedom to succeed",
                "Real-world problem-solving: You will always find an inspiration to build something new, as we see every little piece of technology that can solve the biggest problems in the real-world",
                "True-gen impact: From keeping the planet green, ensuring medicines reach the furthest corners of the world to assisting others in reaching the pinnacle of success, you will leave an indelible mark in the world",
              ],
              className: "liveLeap_box",
            },
          ].map(({ title, subtitle, items, className }, idx) => (
            <motion.div
              className={`col-xl-4 leanLeadLive_box ${className}`}
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="commonTitle text-center text-xl-left">
                <h2 className="commonTitle__title">{title}</h2>
                <h6 className="font-md">{subtitle}</h6>
                <ul>
                  {items.map((item, i) => (
                    <li key={i}>
                      <strong>{item.split(":")[0]}</strong>
                      {item.substring(item.indexOf(":") + 1)}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LeanLeadLive;
