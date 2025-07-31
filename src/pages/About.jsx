import { motion } from 'framer-motion';
import { FaCheckCircle, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const About = () => {
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  // Core values data
  const coreValues = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      content: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Quality',
      content: 'We are committed to delivering high-quality solutions that exceed client expectations.'
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      content: 'We work closely with our clients, fostering strong partnerships for mutual success.'
    },
    {
      icon: <FaRocket />,
      title: 'Excellence',
      content: 'We strive for excellence in everything we do, from code quality to client communication.'
    }
  ];

  // Team members data
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'With over 15 years of experience in the IT industry, John leads our company with vision and expertise.'
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'Sarah oversees our technical strategy and ensures we stay at the forefront of technology innovation.'
    },
    {
      name: 'Michael Chen',
      position: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'Michael leads our development team, bringing extensive experience in software architecture and development.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'Emily ensures our projects are delivered on time and within budget while maintaining high quality standards.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-dark to-primary overflow-hidden">
        <div className="absolute inset-0 bg-dark opacity-70"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About JDIT Business Solutions
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are a team of passionate IT professionals dedicated to helping businesses succeed through innovative technology solutions.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2013, JDIT Business Solutions began with a simple mission: to provide businesses with high-quality, innovative IT solutions that drive growth and efficiency. What started as a small team of passionate developers has grown into a full-service IT company serving clients worldwide.
            </p>
            <p className="text-gray-700 mb-4">
              Over the years, we've expanded our services to include web and mobile development, cloud solutions, IT consulting, and more. Our commitment to quality and client satisfaction has remained unwavering throughout our journey.
            </p>
            <p className="text-gray-700">
              Today, we're proud to have helped hundreds of businesses across various industries transform their operations through technology. Our team continues to grow, bringing together diverse talents and expertise to deliver exceptional solutions for our clients.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="relative h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="JDIT Team" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </div>
      </Section>

      {/* Core Values Section */}
      <Section bgColor="bg-light">
        <div className="text-center mb-12">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-4"
          >
            Our Core Values
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-700 max-w-2xl mx-auto"
          >
            These principles guide everything we do and shape our approach to serving our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              content={value.content}
              icon={value.icon}
              className="text-center"
            />
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section id="team">
        <div className="text-center mb-12">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-4"
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-700 max-w-2xl mx-auto"
          >
            Our talented team of professionals is the backbone of our success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              title={member.name}
              subtitle={member.position}
              content={member.bio}
              className="text-center"
            />
          ))}
        </div>
      </Section>

      {/* Mission & Vision Section */}
      <Section bgColor="bg-primary" className="text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            variants={itemVariants}
            className="bg-white/10 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-200">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We are committed to delivering high-quality services that exceed client expectations and help them achieve their business goals.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white/10 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-200">
              To be a leading global IT solutions provider known for innovation, quality, and client satisfaction. We aim to continuously evolve and adapt to changing technologies, setting new standards in the industry while maintaining our core values and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default About;