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
  // const services = [
  //   {
  //     id: 'web-development',
  //     title: 'Web Development',
  //     description: 'Custom web applications and responsive websites built with modern technologies.',
  //     icon: <FaLaptopCode />,
  //     features: [
  //       'Custom web application development',
  //       'Responsive website design and development',
  //       'E-commerce solutions',
  //       'Content management systems',
  //       'Progressive web applications (PWAs)',
  //       'API development and integration'
  //     ],
  //     image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  //   },
  //   {
  //     id: 'mobile-apps',
  //     title: 'Mobile App Development',
  //     description: 'Native and cross-platform mobile applications for iOS and Android.',
  //     icon: <FaMobileAlt />,
  //     features: [
  //       'Native iOS and Android development',
  //       'Cross-platform development (React Native, Flutter)',
  //       'Mobile app UI/UX design',
  //       'App testing and quality assurance',
  //       'App store submission and optimization',
  //       'Ongoing maintenance and support'
  //     ],
  //     image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  //   },
  //   {
  //     id: 'cloud-solutions',
  //     title: 'Cloud Solutions',
  //     description: 'Scalable cloud infrastructure, migration, and management services.',
  //     icon: <FaCloud />,
  //     features: [
  //       'Cloud migration and deployment',
  //       'Infrastructure as a Service (IaaS)',
  //       'Platform as a Service (PaaS)',
  //       'Software as a Service (SaaS)',
  //       'Cloud security and compliance',
  //       'Managed cloud services'
  //     ],
  //     image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  //   },
  //   {
  //     id: 'it-consulting',
  //     title: 'IT Consulting',
  //     description: 'Strategic technology consulting to optimize your business processes.',
  //     icon: <FaChartLine />,
  //     features: [
  //       'IT strategy development',
  //       'Digital transformation consulting',
  //       'Technology assessment and roadmapping',
  //       'Process optimization',
  //       'IT governance and compliance',
  //       'Technology vendor selection'
  //     ],
  //     image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  //   },
  //   {
  //     id: 'enterprise-solutions',
  //     title: 'Enterprise Solutions',
  //     description: 'Custom enterprise software to streamline your business operations.',
  //     icon: <FaCogs />,
  //     features: [
  //       'Enterprise resource planning (ERP)',
  //       'Customer relationship management (CRM)',
  //       'Business intelligence and analytics',
  //       'Workflow automation',
  //       'Document management systems',
  //       'Custom enterprise applications'
  //     ],
  //     image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  //   },
  //   {
  //     id: 'staff-augmentation',
  //     title: 'Staff Augmentation',
  //     description: 'Skilled IT professionals to supplement your team on-demand.',
  //     icon: <FaUsers />,
  //     features: [
  //       'Temporary and long-term staffing',
  //       'Dedicated development teams',
  //       'Project-based staffing',
  //       'Skill gap fulfillment',
  //       'Seamless integration with your team',
  //       'Flexible engagement models'
  //     ],
  //     image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  //   },
  //   {
  //     id: 'cybersecurity',
  //     title: 'Cybersecurity',
  //     description: 'Comprehensive security solutions to protect your digital assets.',
  //     icon: <FaShieldAlt />,
  //     features: [
  //       'Security assessment and auditing',
  //       'Vulnerability management',
  //       'Security monitoring and incident response',
  //       'Data protection and encryption',
  //       'Security awareness training',
  //       'Compliance and regulatory support'
  //     ],
  //     image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  //   },
  //   {
  //     id: 'data-analytics',
  //     title: 'Data Analytics & BI',
  //     description: 'Turn your data into actionable insights for informed decision-making.',
  //     icon: <FaDatabase />,
  //     features: [
  //       'Data warehousing and lake solutions',
  //       'Business intelligence implementation',
  //       'Data visualization and dashboards',
  //       'Predictive analytics',
  //       'Big data processing',
  //       'Data integration and ETL'
  //     ],
  //     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  //   },
  //   {
  //     id: 'ai-ml',
  //     title: 'AI & Machine Learning',
  //     description: 'Intelligent solutions that learn and adapt to your business needs.',
  //     icon: <FaRobot />,
  //     features: [
  //       'Machine learning model development',
  //       'Natural language processing',
  //       'Computer vision solutions',
  //       'Predictive modeling',
  //       'AI integration with existing systems',
  //       'Chatbots and virtual assistants'
  //     ],
  //     image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  //   },
  //   {
  //     id: 'network-infrastructure',
  //     title: 'Network Infrastructure',
  //     description: 'Reliable and secure network solutions for your organization.',
  //     icon: <FaNetworkWired />,
  //     features: [
  //       'Network design and implementation',
  //       'Network security',
  //       'Wireless networking',
  //       'VPN and remote access solutions',
  //       'Network monitoring and management',
  //       'Infrastructure upgrades and maintenance'
  //     ],
  //     image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  //   }
  // ];

  const services = [
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Creative and modern web designs tailored to your brand.',
      icon: <FaLaptopCode />,
      features: [
        'Responsive and mobile-friendly designs',
        'User-centered layout',
        'Brand-focused visual elements',
        'Figma/Adobe XD mockups',
        'HTML/CSS prototyping',
        'Design consistency across pages'
      ],
      image: 'https://i.pinimg.com/1200x/5f/15/3e/5f153ea304e601d9d9cdd622ced582cb.jpg'
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Robust and scalable websites built with cutting-edge technologies.',
      icon: <FaLaptopCode />,
      features: [
        'Custom web application development',
        'Full-stack development',
        'CMS integration',
        'Performance optimization',
        'Responsive development',
        'API development and integration'
      ],
      image: 'https://i.pinimg.com/1200x/79/c6/2d/79c62d94154fb332afb84191a996e66f.jpg'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'User-focused interface and experience design to engage and retain users.',
      icon: <FaChartLine />,
      features: [
        'Wireframing and prototyping',
        'Usability testing',
        'User journey mapping',
        'Interactive UI design',
        'Accessibility focused design',
        'Design systems and components'
      ],
      image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'web-security',
      title: 'Web Security',
      description: 'End-to-end protection of your digital platforms and data.',
      icon: <FaShieldAlt />,
      features: [
        'SSL implementation',
        'Vulnerability scanning',
        'Firewalls and WAFs',
        'Penetration testing',
        'Security monitoring',
        'Data encryption & privacy controls'
      ],
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Marketing strategies that amplify your online presence and drive results.',
      icon: <FaChartLine />,
      features: [
        'SEO & SEM',
        'Email marketing',
        'Content marketing',
        'PPC advertising',
        'Marketing analytics',
        'Conversion rate optimization'
      ],
      image: 'https://i.pinimg.com/1200x/2b/44/c3/2b44c33c81df088bd6032e7267366aba.jpg'
    },
    {
      id: 'data-analysis-bi',
      title: 'Data Analysis & BI',
      description: 'Derive insights and trends from your data to make informed decisions.',
      icon: <FaDatabase />,
      features: [
        'Data visualization dashboards',
        'Descriptive and predictive analytics',
        'ETL pipelines',
        'Business intelligence reporting',
        'Data cleansing & transformation',
        'KPI tracking & benchmarking'
      ],
      image: 'https://i.pinimg.com/1200x/75/88/44/758844b51ffd60e3be7184a0a655e833.jpg'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      description: 'Scalable, reliable, and secure cloud-based infrastructure and solutions.',
      icon: <FaCloud />,
      features: [
        'Cloud migration',
        'IaaS / PaaS / SaaS setup',
        'Cloud architecture design',
        'DevOps and CI/CD pipelines',
        'Disaster recovery solutions',
        'Managed cloud services'
      ],
      image: 'https://i.pinimg.com/736x/f7/b7/3e/f7b73e20bf62956c19f86dcbd69ae0eb.jpg'
    },
    {
      id: 'ecommerce-solution',
      title: 'E-Commerce Solution',
      description: 'Complete online store setup and integration to grow your digital sales.',
      icon: <FaCogs />,
      features: [
        'Custom online store development',
        'Payment gateway integration',
        'Product and order management',
        'Shopify, WooCommerce, Magento',
        'User-friendly checkout experiences',
        'Inventory and analytics tools'
      ],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mobile-app-dev',
      title: 'Mobile App Development',
      description: 'Feature-rich mobile apps for iOS and Android platforms.',
      icon: <FaMobileAlt />,
      features: [
        'Native iOS & Android apps',
        'Cross-platform solutions (React Native, Flutter)',
        'App UI/UX design',
        'App testing and deployment',
        'Push notifications',
        'Ongoing support & updates'
      ],
      image: 'https://i.pinimg.com/736x/e3/70/5b/e3705b4255b7d26f778a0f34cdb296d3.jpg'
    },
    {
      id: 'it-support',
      title: 'IT Support & Maintenance',
      description: 'Reliable IT support to keep your systems running smoothly.',
      icon: <FaUsers />,
      features: [
        '24/7 technical support',
        'Bug fixing & patch updates',
        'Server maintenance',
        'System monitoring',
        'Backup & recovery',
        'Helpdesk services'
      ],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'data-analytics-services',
      title: 'Data Analytics & Services',
      description: 'Data-driven services to extract, transform, and deliver valuable insights.',
      icon: <FaDatabase />,
      features: [
        'ETL processes',
        'Data mining',
        'Predictive modeling',
        'Cloud data pipelines',
        'Custom analytics tools',
        'Visualization & dashboards'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'smm-services',
      title: 'Social Media Marketing (SMM)',
      description: 'Boost brand engagement with targeted social media strategies.',
      icon: <FaChartLine />,
      features: [
        'Social media strategy',
        'Content creation and management',
        'Influencer marketing',
        'Platform-specific campaigns (Instagram, Facebook, LinkedIn)',
        'Social listening tools',
        'Analytics and reporting'
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'
    }
  ];


  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url('/images/hero/services-hero-bg.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
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