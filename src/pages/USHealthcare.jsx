import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { FaPhoneAlt, FaFileMedical, FaFileInvoiceDollar, FaWallet, FaClinicMedical, FaIdCard } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const USHealthcare = () => {
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Healthcare services data
  
  const healthcareServices = [
    {
      id: 'ar-caller',
      title: 'AR Caller',
      description: 'Efficient accounts receivable follow-up to ensure timely reimbursement from insurance providers.',
      icon: <FaPhoneAlt />, // or another suitable icon from react-icons
      features: [
        'Insurance follow-up',
        'Claim status checks',
        'Denial management',
        'Patient follow-up for balances',
        'A/R aging report handling',
        'Daily productivity reporting'
      ],
      image: 'https://i.pinimg.com/736x/eb/24/b9/eb24b91c97f40e4ab8c180ee9f4cab9c.jpg'
    },
    {
      id: 'medical-coding',
      title: 'Medical Coding',
      description: 'Accurate medical coding services to ensure compliant billing and reduced denials.',
      icon: <FaFileMedical />,
      features: [
        'ICD-10, CPT, and HCPCS coding',
        'Specialty-specific coding expertise',
        'Chart audits and compliance checks',
        'Coding for inpatient and outpatient services',
        'Certified coders (CPC, CCS, etc.)',
        'Coding accuracy and productivity reports'
      ],
      image: 'https://i.pinimg.com/736x/b6/96/ee/b696ee610d8aac5441d3d68cf64f6242.jpg'
    },
    {
      id: 'medical-billing',
      title: 'Medical Billing',
      description: 'Comprehensive billing services that improve revenue cycle efficiency and reduce claim denials.',
      icon: <FaFileInvoiceDollar />,
      features: [
        'Charge entry and claim submission',
        'Payment posting and reconciliation',
        'Insurance and patient billing',
        'Denial management and appeals',
        'AR follow-up',
        'Monthly reports and analytics'
      ],
      image: 'https://i.pinimg.com/1200x/8f/0b/cd/8f0bcd2b0f382cd60f64f751d4b1b239.jpg'
    },
    {
      id: 'accounts-receivable',
      title: 'Accounts Receivable',
      description: 'Optimize collections and improve cash flow with our AR management services.',
      icon: <FaWallet />,
      features: [
        'Timely follow-up on unpaid claims',
        'Reduction in aging receivables',
        'Claim reprocessing and appeals',
        'Patient billing and collection support',
        'Detailed AR reports',
        'Denial trends analysis'
      ],
      image: 'https://i.pinimg.com/736x/46/f5/af/46f5afaab78a7b359ad4f2cb7885fde4.jpg'
    },
    {
      id: 'practice-management',
      title: 'Practice Management Services',
      description: 'Streamline your practice operations with complete management solutions.',
      icon: <FaClinicMedical />,
      features: [
        'Patient scheduling and registration',
        'Insurance verification and authorization',
        'Medical records management',
        'Billing and collections',
        'Reporting and analytics',
        'Compliance and documentation support'
      ],
      image: 'https://i.pinimg.com/1200x/76/6e/bd/766ebd5336ec62afa06586a0b8b21717.jpg'
    },
    {
      id: 'insurance-verification',
      title: 'Insurance & Eligibility Verification',
      description: 'Accurate insurance verification services to prevent claim denials and delays.',
      icon: <FaIdCard />,
      features: [
        'Verification of insurance coverage',
        'Real-time eligibility checks',
        'Pre-authorization and referrals',
        'Updating patient insurance records',
        'Coordination of benefits',
        'Verification logs and reports'
      ],
      image: 'https://i.pinimg.com/736x/9d/a8/f7/9da8f78885641ff93edd38a6d857292a.jpg'
    }
  ];


  // Optimize image loading with lazy loading
  const optimizedImages = healthcareServices.map(service => ({
    ...service,
    // Add loading="lazy" attribute when rendered
  }));

  return (
    <LazyMotion features={domAnimation}>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url('/images/hero/healthcare-hero-bg.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            US Healthcare Solutions
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto"
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
        <div className="text-center mb-12">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-4"
          >
            Healthcare Technology Solutions
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-700 max-w-2xl mx-auto"
          >
            We provide specialized IT services for healthcare organizations, helping them leverage technology to improve patient care, streamline operations, and ensure compliance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthcareServices.slice(0, 6).map((service) => (
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
            Discuss Your Healthcare Project
          </Button>
        </div>
      </Section>

      {/* Detailed Service Sections */}
      {healthcareServices.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          bgColor={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div variants={itemVariants} className={index % 2 !== 0 ? 'lg:order-2' : ''}>
              <div className="flex items-center mb-4">
                <div className="text-3xl text-blue-600 mr-4">{service.icon}</div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
              </div>
              <p className="text-gray-700 mb-6">{service.description}</p>

              <h3 className="text-xl font-semibold mb-4">What We Provide:</h3>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
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
                loading="lazy"
                width="600"
                height="400"
              />
            </motion.div>
          </div>
        </Section>
      ))}

      {/* Healthcare Industry Section */}
      <Section bgColor="bg-blue-100">
        <div className="text-center mb-12">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-4"
          >
            Why Choose Us for Healthcare IT
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-700 max-w-2xl mx-auto"
          >
            Our team understands the unique challenges and requirements of the healthcare industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Healthcare Expertise</h3>
            <p className="text-gray-700">Our team includes specialists with extensive experience in healthcare IT systems and compliance requirements.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">HIPAA Compliance</h3>
            <p className="text-gray-700">All our healthcare solutions are designed with HIPAA compliance as a fundamental requirement.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Patient-Centered Approach</h3>
            <p className="text-gray-700">We develop solutions that enhance the patient experience while streamlining provider workflows.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Interoperability</h3>
            <p className="text-gray-700">Our systems are designed to integrate seamlessly with existing healthcare infrastructure and third-party applications.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Data Security</h3>
            <p className="text-gray-700">We implement robust security measures to protect sensitive patient information and healthcare data.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
            <p className="text-gray-700">We provide continuous support and maintenance to ensure your healthcare IT systems operate efficiently.</p>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-blue-600" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Transform Your Healthcare Organization
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl mb-8"
          >
            Contact us today to discuss how our healthcare IT solutions can help your organization improve patient care and operational efficiency.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/20"
            >
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </Section>
    </LazyMotion>
  );
};

export default USHealthcare;