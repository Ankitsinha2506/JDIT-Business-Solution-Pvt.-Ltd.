import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaChartLine, FaUsers, FaCogs, FaShieldAlt, FaDatabase } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Testimonials from '../components/layout/CarrerLayout/Testimonials';

// Static data outside the component (better for performance)
// const services = [
//   {
//     id: 1,
//     title: 'Web Development',
//     content: 'Custom web applications and responsive websites built with modern technologies.',
//     icon: <FaLaptopCode />,
//     link: '/services#web-development',
//   },
//   {
//     id: 2,
//     title: 'Mobile App Development',
//     content: 'Native and cross-platform mobile applications for iOS and Android.',
//     icon: <FaMobileAlt />,
//     link: '/services#mobile-apps',
//   },
//   {
//     id: 3,
//     title: 'Cloud Solutions',
//     content: 'Scalable cloud infrastructure, migration, and management services.',
//     icon: <FaCloud />,
//     link: '/services#cloud-solutions',
//   },
//   {
//     id: 4,
//     title: 'IT Consulting',
//     content: 'Strategic technology consulting to optimize your business processes.',
//     icon: <FaChartLine />,
//     link: '/services#it-consulting',
//   },
//   {
//     id: 5,
//     title: 'Enterprise Solutions',
//     content: 'Custom enterprise software to streamline your business operations.',
//     icon: <FaCogs />,
//     link: '/services#enterprise-solutions',
//   },
//   {
//     id: 6,
//     title: 'Staff Augmentation',
//     content: 'Skilled IT professionals to supplement your team on-demand.',
//     icon: <FaUsers />,
//     link: '/services#staff-augmentation',
//   },
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


const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '50+', label: 'Team Members' },
  { value: '100+', label: 'Happy Clients' },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 filter brightness-50"
          style={{
            backgroundImage: `url('/images/hero/home-hero-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl text-center md:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Empowering Your Business with Cutting-Edge IT Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-8 max-w-3xl"
              variants={itemVariants}
            >
              At JDIT Business Solution Pvt. Ltd., we deliver tailored software development, cloud integration, and IT consulting to drive your success.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Button to="/services" size="lg">
                  Our Services
                </Button>
              </motion.div>
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
            </motion.div>
          </motion.div>
        </div>

        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: `${50 + i * 60}px`,
                height: `${50 + i * 60}px`,
                top: `${20 + i * 25}%`,
                left: `${15 + i * 30}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.1, 1],
                opacity: [0, 0.15, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                delay: i * 5,
                ease: 'easeInOut',
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <Section id="about" bgColor="bg-light">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              JDIT Business Solutions is a leading IT company providing innovative technology solutions to businesses worldwide. With over 10 years of experience, we've helped hundreds of clients achieve their business goals through digital transformation.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of skilled professionals is dedicated to delivering high-quality solutions tailored to your specific needs. We combine technical expertise with business acumen to create solutions that drive growth and efficiency.
            </p>
            <Button to="/about">Learn More About Us</Button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md text-center transition-opacity duration-300"
                whileHover={{
                  opacity: 0.8,
                  scale: 1.05,
                  backgroundColor: '#f0f4f8', // Light blue-gray color on hover
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1
                }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Services Section */}
      <Section>
        <div className="text-center mb-12">
          <motion.h2 variants={itemVariants} initial="hidden" animate="visible" className="text-3xl font-bold mb-4">
            Our Services
          </motion.h2>
          <motion.p variants={itemVariants} initial="hidden" animate="visible" className="text-gray-700 max-w-2xl mx-auto">
            We offer a comprehensive range of IT services to help your business thrive in the digital age.
          </motion.p>
        </div>

        {/* Staggered container */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card
                title={service.title}
                content={service.description}
                icon={service.icon}
                link={`#${service.id}`}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button to="/contact" variant="primary">
            Discuss Your Project
          </Button>
        </div>
      </Section>

      {/* <Section id="services" className='pb-8'>
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
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
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card
                title={service.title}
                content={service.content}
                icon={service.icon}
                link={service.link}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button to="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </Section> */}

      {/* Testimonial sections */}
      <Testimonials />

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
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl mb-8">
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
        </motion.div>
      </Section>
    </>
  );
};

export default Home;
