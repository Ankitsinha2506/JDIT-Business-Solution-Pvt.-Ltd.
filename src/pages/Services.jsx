import { HashLink } from 'react-router-hash-link';
import React from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Section from "../components/ui/Section";
import { services } from "../data/servicesData";

const HEADER_OFFSET = 80;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-90"
          style={{ backgroundImage: `url('/images/hero/services-hero-bg.jpeg')` }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Comprehensive IT solutions tailored to your business needs.
          </motion.p>
        </div>
      </section>

      {/* Services overview grid */}
      <Section>
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

      {/* Detailed service sections with matching IDs */}
      {services.map((service, idx) => (
        <Section
          key={service.id}
          id={service.id} // important for scroll target
          bgColor={idx % 2 === 0 ? "bg-white" : "bg-light"}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <motion.div
              variants={itemVariants}
              className={idx % 2 !== 0 ? "lg:order-2" : ""}
            >
              <div className="flex items-center mb-4 text-3xl text-primary">
                {React.createElement(service.icon)}
                <h2 className="ml-4 font-bold">{service.title}</h2>
              </div>
              <p className="mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <HashLink
                smooth
                to="/contact#contact-form"
                scroll={el => {
                  const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                <Button>Request a Consultation</Button>
              </HashLink>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={itemVariants}
              className={`relative h-80 rounded-lg overflow-hidden shadow-xl ${idx % 2 !== 0 ? "lg:order-1" : ""
                }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </Section>
      ))}
    </>
  );
}
