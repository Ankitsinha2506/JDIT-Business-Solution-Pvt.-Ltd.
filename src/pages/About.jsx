import { motion } from 'framer-motion';
import { FaCheckCircle, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';
import Card from '../components/ui/Card';
import Section from '../components/ui/Section';
import ankitImage from '../../public/images/ankit.jpg';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // faster stagger
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 }, // shorter animation duration
  }
};

const About = () => {
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

  const teamMembers = [
    {
      name: 'Arjun Mehtah',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      bio: 'With over 15 years of experience in the IT industry, Arjun leads our company with vision and expertise.'
    },
    {
      name: 'Neha Sharma',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      bio: 'Neha oversees our technical strategy and ensures we stay at the forefront of technology innovation.'
    },
    {
      name: 'Ankit Lal Sinha',
      position: 'Lead Developer',
      image: ankitImage,
      bio: 'Ankit leads our development team, bringing experience in software architecture & development.'
    },
    {
      name: 'Priya Menon',
      position: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      bio: 'Priya ensures our projects are delivered on time and within budget while maintaining high quality standards.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '700px',
          padding: '100px 0',
          textAlign: 'center',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: "url('images/hero/About.jpg') center/cover no-repeat",
        }}
      >
        {/* Overlay Layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',  // 50% black fade overlay
            zIndex: 0,
          }}
        />

        {/* Content Layer */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>About JDIT Business Solutions</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', margin: '10px auto' }}>
            We are a team of passionate IT professionals dedicated to helping businesses succeed through innovative technology solutions.          </p>
        </div>
      </section>


      {/* Our Story Section */}
      <Section>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              At JDIT Business Solutions Pvt. Ltd., we are passionate about leveraging technology to empower businesses and individuals alike. Established with a vision to revolutionize the digital landscape, JDIT is a dynamic software development company committed to delivering innovative solutions tailored to meet the unique needs of our clients.
            </p>
            <p className="text-gray-700 mb-4">
              With a focus on excellence and a dedication to customer satisfaction, we specialize in crafting cutting-edge software applications that drive efficiency, productivity, and growth. Our team of experienced engineers, designers, and project managers collaborate closely with clients to understand their objectives, challenges, and vision, ensuring that each solution we deliver exceeds expectations.
            </p>
            <p className="text-gray-700 mb-4">
              At JDIT, we embrace a customer-centric approach, prioritizing transparency, communication, and collaboration throughout the development process. Whether you require custom software development, mobile app development, web application development, or enterprise solutions, we have the expertise and resources to bring your ideas to life.
            </p>
            <p className="text-gray-700">
              Join us on a journey of digital transformation. Discover how JDIT Business Solutions Pvt. Ltd. can help unlock your potential and propel your business to new heights through technology.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-100 rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="JDIT Team"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </Section>

      {/* Core Values Section */}
      <Section bgColor="bg-light">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
            Our Core Values
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 max-w-2xl mx-auto">
            These principles guide everything we do and shape our approach to serving our clients.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {coreValues.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                title={value.title}
                content={value.content}
                icon={value.icon}
                className="text-center"
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Team Section */}
      <Section id="team">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
            Meet Our Team
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 max-w-2xl mx-auto">
            Our talented team of professionals is the backbone of our success.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                image={member.image}
                title={member.name}
                subtitle={member.position}
                content={member.bio}
                className="text-center"
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Mission & Vision Section */}
      <Section bgColor="bg-primary" className="text-white">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="bg-white/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-200">
              At JDIT Business Solutions Pvt. Ltd., our mission is to empower businesses of all sizes to achieve their full potential through innovative and customized IT solutions. We aim to be a trusted partner by delivering technology-driven services that enhance operational efficiency, foster digital transformation, and accelerate business growth.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-200">
              Our vision at JDIT Business Solutions Pvt. Ltd. is to be the leading provider of transformative IT solutions globally. We envision a future where businesses of all sizes leverage technology to unlock their full potential and thrive in an ever-evolving digital landscape. Our commitment to innovation, integrity, and excellence fuels our journey toward this vision.            </p>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
};

export default About;
