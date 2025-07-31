import { motion } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaCloud, 
  FaChartLine, 
  FaCogs, 
  FaUsers, 
  FaShieldAlt, 
  FaDatabase, 
  FaRobot, 
  FaNetworkWired 
} from 'react-icons/fa';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Services = () => {
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
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom web applications and responsive websites built with modern technologies.',
      icon: <FaLaptopCode />,
      features: [
        'Custom web application development',
        'Responsive website design and development',
        'E-commerce solutions',
        'Content management systems',
        'Progressive web applications (PWAs)',
        'API development and integration'
      ],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: <FaMobileAlt />,
      features: [
        'Native iOS and Android development',
        'Cross-platform development (React Native, Flutter)',
        'Mobile app UI/UX design',
        'App testing and quality assurance',
        'App store submission and optimization',
        'Ongoing maintenance and support'
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure, migration, and management services.',
      icon: <FaCloud />,
      features: [
        'Cloud migration and deployment',
        'Infrastructure as a Service (IaaS)',
        'Platform as a Service (PaaS)',
        'Software as a Service (SaaS)',
        'Cloud security and compliance',
        'Managed cloud services'
      ],
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: 'Strategic technology consulting to optimize your business processes.',
      icon: <FaChartLine />,
      features: [
        'IT strategy development',
        'Digital transformation consulting',
        'Technology assessment and roadmapping',
        'Process optimization',
        'IT governance and compliance',
        'Technology vendor selection'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'enterprise-solutions',
      title: 'Enterprise Solutions',
      description: 'Custom enterprise software to streamline your business operations.',
      icon: <FaCogs />,
      features: [
        'Enterprise resource planning (ERP)',
        'Customer relationship management (CRM)',
        'Business intelligence and analytics',
        'Workflow automation',
        'Document management systems',
        'Custom enterprise applications'
      ],
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'staff-augmentation',
      title: 'Staff Augmentation',
      description: 'Skilled IT professionals to supplement your team on-demand.',
      icon: <FaUsers />,
      features: [
        'Temporary and long-term staffing',
        'Dedicated development teams',
        'Project-based staffing',
        'Skill gap fulfillment',
        'Seamless integration with your team',
        'Flexible engagement models'
      ],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: <FaShieldAlt />,
      features: [
        'Security assessment and auditing',
        'Vulnerability management',
        'Security monitoring and incident response',
        'Data protection and encryption',
        'Security awareness training',
        'Compliance and regulatory support'
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      description: 'Turn your data into actionable insights for informed decision-making.',
      icon: <FaDatabase />,
      features: [
        'Data warehousing and lake solutions',
        'Business intelligence implementation',
        'Data visualization and dashboards',
        'Predictive analytics',
        'Big data processing',
        'Data integration and ETL'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that learn and adapt to your business needs.',
      icon: <FaRobot />,
      features: [
        'Machine learning model development',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive modeling',
        'AI integration with existing systems',
        'Chatbots and virtual assistants'
      ],
      image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'network-infrastructure',
      title: 'Network Infrastructure',
      description: 'Reliable and secure network solutions for your organization.',
      icon: <FaNetworkWired />,
      features: [
        'Network design and implementation',
        'Network security',
        'Wireless networking',
        'VPN and remote access solutions',
        'Network monitoring and management',
        'Infrastructure upgrades and maintenance'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
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
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive IT solutions tailored to your business needs.
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <Section>
        <div className="text-center mb-12">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-4"
          >
            What We Offer
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-700 max-w-2xl mx-auto"
          >
            We provide a wide range of IT services to help businesses of all sizes leverage technology for growth and success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <Card
              key={service.id}
              title={service.title}
              content={service.description}
              icon={service.icon}
              link={`#${service.id}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/contact" variant="primary">
            Discuss Your Project
          </Button>
        </div>
      </Section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <Section 
          key={service.id} 
          id={service.id} 
          bgColor={index % 2 === 0 ? 'bg-white' : 'bg-light'}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div variants={itemVariants} className={index % 2 !== 0 ? 'lg:order-2' : ''}>
              <div className="flex items-center mb-4">
                <div className="text-3xl text-primary mr-4">{service.icon}</div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
              </div>
              <p className="text-gray-700 mb-6">{service.description}</p>
              
              <h3 className="text-xl font-semibold mb-4">What We Provide:</h3>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button to="/contact">
                Request a Consultation
              </Button>
            </motion.div>
            
            {/* Image */}
            <motion.div 
              variants={itemVariants} 
              className={`relative h-80 rounded-lg overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </div>
        </Section>
      ))}

      {/* CTA Section */}
      <Section bgColor="bg-primary" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl mb-8"
          >
            Contact us today to discuss how our services can help your business grow and succeed.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button 
              to="/contact" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/20"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Services;