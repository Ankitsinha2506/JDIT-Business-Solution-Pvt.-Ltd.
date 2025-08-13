// src/pages/USHealthcare.jsx
import { useState, useCallback, memo } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import { healthcareServices } from "../data/healthcareServicesData";

const HEADER_OFFSET = 80; // adjust for your sticky navbar height

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Memoized card that triggers detail render & scroll
const MemoCard = memo(({ service, onCardClick }) => {
  const IconComponent = service.icon;
  return (
    <div
      onClick={() => onCardClick(service.id)}
      className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer h-full"
    >
      {IconComponent && <IconComponent size={40} className="text-blue-600 mb-4" />}
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
});

export default function USHealthcare() {
  const [showDetails, setShowDetails] = useState(false);

  // Function to open details & scroll to section
  const handleCardClick = useCallback((id) => {
    // Show details
    setShowDetails(true);
    // Delay scroll until sections are rendered
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y =
          el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 200); // adjust if render is slow
  }, []);

  const toggleDetails = useCallback(() => {
    setShowDetails((prev) => !prev);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/hero/health.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "700px",
            zIndex: 0,
          }}
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          style={{ height: "700px", zIndex: 1 }}
        />
        <div
          className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col justify-center items-center"
          style={{ height: "700px" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 text-center px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            US Healthcare Solutions
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Innovative technology solutions for the modern healthcare industry.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <Section>
        <div className="text-center mb-12 px-4">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            Healthcare Technology Solutions
          </motion.h2>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-700 max-w-xl sm:max-w-2xl mx-auto"
          >
            We provide specialized IT services for healthcare organizations,
            helping them leverage technology to improve patient care,
            streamline operations, and ensure compliance.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {healthcareServices.slice(0, 6).map((service) => (
            <MemoCard
              key={service.id}
              service={service}
              onCardClick={handleCardClick}
            />
          ))}
        </div>

        <div className="text-center mt-12 px-4">
          <Button onClick={toggleDetails} variant="primary" type="button">
            {showDetails ? "Hide Detailed Services" : "Show Detailed Services"}
          </Button>
        </div>
      </Section>

      {/* Detailed Sections */}
      {showDetails &&
        healthcareServices.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Section
              key={service.id}
              id={service.id} // target for scroll
              bgColor={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-0">
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className={index % 2 !== 0 ? "lg:order-2" : ""}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl text-blue-600 mr-4">
                      <IconComponent />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-6">{service.description}</p>

                  <h3 className="text-xl font-semibold mb-4">
                    What We Provide:
                  </h3>
                  <ul className="space-y-2 mb-6 list-inside list-disc text-gray-700">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Smooth Scroll to Contact Form */}
                  <HashLink
                    smooth
                    to="/contact#contact-form"
                    scroll={(el) => {
                      const y =
                        el.getBoundingClientRect().top +
                        window.pageYOffset -
                        HEADER_OFFSET;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }}
                  >
                    <Button variant="primary">Request a Consultation</Button>
                  </HashLink>
                </motion.div>

                {/* Image */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className={`relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-xl ${index % 2 !== 0 ? "lg:order-1" : ""
                    }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                </motion.div>
              </div>
            </Section>
          );
        })}



      {/* ... Healthcare Industry Section and CTA can remain the same */}
      {/* Healthcare Industry Section */}
      <Section bgColor="bg-blue-100">
        <div className="text-center mb-12 px-4">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            Why Choose Us for Healthcare IT
          </motion.h2>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-700 max-w-xl sm:max-w-2xl mx-auto"
          >
            Our team understands the unique challenges and requirements of the healthcare industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {[
            {
              title: "Healthcare Expertise",
              text: "Our team includes specialists with extensive experience in healthcare IT systems and compliance requirements.",
            },
            {
              title: "HIPAA Compliance",
              text: "All our healthcare solutions are designed with HIPAA compliance as a fundamental requirement.",
            },
            {
              title: "Patient-Centered Approach",
              text: "We develop solutions that enhance the patient experience while streamlining provider workflows.",
            },
            {
              title: "Interoperability",
              text: "Our systems are designed to integrate seamlessly with existing healthcare infrastructure and third-party applications.",
            },
            {
              title: "Data Security",
              text: "We implement robust security measures to protect sensitive patient information and healthcare data.",
            },
            {
              title: "Ongoing Support",
              text: "We provide continuous support and maintenance to ensure your healthcare IT systems operate efficiently.",
            },
          ].map(({ title, text }, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)",
                y: -5,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-700">{text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-blue-600" className="text-white">
        <div className="text-center max-w-3xl mx-auto px-4 sm:px-0">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Transform Your Healthcare Organization
          </motion.h2>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-xl mb-8"
          >
            Contact us today to discuss how our healthcare IT solutions can help your
            organization improve patient care and operational efficiency.
          </motion.p>
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <HashLink
              smooth
              to="/contact#contact-form"
              scroll={(el) => {
                const yOffset = -HEADER_OFFSET;
                const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20"
              >
                Schedule a Consultation
              </Button>
            </HashLink>
          </motion.div>
        </div>
      </Section>
    </LazyMotion>
  );
}
