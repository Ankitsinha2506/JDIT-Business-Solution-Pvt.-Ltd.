import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Section from "../components/ui/Section";
import Projects from "../components/layout/Projects";
import Testimonials from "../components/layout/CarrerLayout/Testimonials";
import { services } from "../data/servicesData";

const stats = [
  { value: "10+", label: "Years Experience", target: 10 },
  { value: "200+", label: "Projects Completed", target: 200 },
  { value: "50+", label: "Team Members", target: 50 },
  { value: "100+", label: "Happy Clients", target: 100 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const HEADER_OFFSET = 80; // Adjust as needed

export default function Home() {
  const [displayStats, setDisplayStats] = useState(stats.map(() => 0));

  useEffect(() => {
    let frame;
    const duration = 2000;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayStats(stats.map((s) => Math.floor(s.target * progress)));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 filter brightness-50 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/hero/home-hero-bg.jpg')` }}
        />
        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center md:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold text-white mb-6"
              variants={itemVariants}
            >
              Empowering Your Software with Cutting-Edge IT Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-8"
              variants={itemVariants}
            >
              We deliver tailored software development, cloud integration & IT
              consulting.
            </motion.p>
            <div className="flex gap-4 justify-center md:justify-start">
              <HashLink
                smooth
                to="/services#web-design"
                scroll={(el) => {
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset -
                    HEADER_OFFSET;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                <Button size="lg">Our Services</Button>
              </HashLink>
              <HashLink
                smooth
                to="/services#contact"
                scroll={(el) => {
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset -
                    HEADER_OFFSET;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/20"
                >
                  Contact Us
                </Button>
              </HashLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" bgColor="bg-light">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            {/* <p className="mb-4">
              JDIT Software Solutions is a leading IT company providing
              innovative tech solutions worldwide.
            </p> */}
            <p className="mb-4">JDIT Software Solutions is a leading IT company providing innovative technology
              solutions to Softwarees worldwide. With over 10 years of experience, we've helped hundreds of
              clients achieve their Software goals through digital transformation.</p>
              
            <p className="mb-4">Our team of skilled professionals is dedicated to delivering high-quality solutions
              tailored to your specific needs. We combine technical expertise with Software acumen to create
              solutions that drive growth and efficiency.</p>
            <Button to="/about">Learn More About Us</Button>
          </motion.div>
          <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {displayStats[i]}
                  {stat.value.replace(/[0-9]+/, "")}
                </div>
                <div>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section id="services">
        <div className="text-center mb-12">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.slice(0, 6).map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                {/* Icon */}
                {service.icon && <service.icon size={40} className="text-primary mb-4" />}

                {/* Title & Desc */}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Learn More Button */}
                <HashLink
                  smooth
                  to={`/services#${service.id}`}
                  scroll={(el) => {
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset -
                      HEADER_OFFSET;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                >
                  <Button size="sm" variant="primary">
                    Learn More
                  </Button>
                </HashLink>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/*  Recently Completed Projects Section */}
      <Projects />

      {/* Our Associate Partners Section */}
      {/* <Testimonials /> */}

      {/* CTA Section */}
      <Section bgColor="bg-primary" className="text-white">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Software?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl mb-8">
            Let's discuss how our IT solutions can help you achieve your Software goals.
          </motion.p>
          <motion.div variants={itemVariants}>

            <HashLink
              smooth
              to="/contact#contact-form"
              scroll={el => {
                const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20">
                Get in Touch
              </Button>
            </HashLink>
            {/* <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/20"
            >
            Get in Touch
          </Button> */}
          </motion.div>
        </motion.div>
      </Section >
    </>
  );
}
