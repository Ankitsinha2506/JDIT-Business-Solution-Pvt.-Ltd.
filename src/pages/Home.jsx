import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaChartLine, FaUsers, FaCogs } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Home = () => {
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  // Services data
  const services = [
    {
      id: 1,
      title: 'Web Development',
      content: 'Custom web applications and responsive websites built with modern technologies.',
      icon: <FaLaptopCode />,
      link: '/services#web-development'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      content: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: <FaMobileAlt />,
      link: '/services#mobile-apps'
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      content: 'Scalable cloud infrastructure, migration, and management services.',
      icon: <FaCloud />,
      link: '/services#cloud-solutions'
    },
    {
      id: 4,
      title: 'IT Consulting',
      content: 'Strategic technology consulting to optimize your business processes.',
      icon: <FaChartLine />,
      link: '/services#it-consulting'
    },
    {
      id: 5,
      title: 'Enterprise Solutions',
      content: 'Custom enterprise software to streamline your business operations.',
      icon: <FaCogs />,
      link: '/services#enterprise-solutions'
    },
    {
      id: 6,
      title: 'Staff Augmentation',
      content: 'Skilled IT professionals to supplement your team on-demand.',
      icon: <FaUsers />,
      link: '/services#staff-augmentation'
    }
  ];

  // Stats data
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Team Members' },
    { value: '100+', label: 'Happy Clients' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gradient-to-r from-dark to-red-500 overflow-hidden">
        <div className="absolute inset-0 bg-dark opacity-70"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Innovative IT Solutions for Your Business Growth
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help businesses transform through technology with custom software development, cloud solutions, and IT consulting services.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button to="/services" size="lg">
                Our Services
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                opacity: [0, 0.2, 0],
              }}
              transition={{ 
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <Section id="about" bgColor="bg-light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              JDIT Business Solutions is a leading IT company providing innovative technology solutions to businesses worldwide. With over 10 years of experience, we've helped hundreds of clients achieve their business goals through digital transformation.  
            </p>
            <p className="text-gray-700 mb-6">
              Our team of skilled professionals is dedicated to delivering high-quality solutions tailored to your specific needs. We combine technical expertise with business acumen to create solutions that drive growth and efficiency.
            </p>
            <Button to="/about">
              Learn More About Us
            </Button>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services">
        <div className="text-center mb-12">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-700 max-w-2xl mx-auto"
          >
            We offer a comprehensive range of IT services to help your business thrive in the digital age.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              content={service.content}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-red-500" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl mb-8"
          >
            Let's discuss how our IT solutions can help you achieve your business goals.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button 
              to="/contact" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/20"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Home;