import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      details: ['+91 7057676132'],
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['hr@jditbs.com'],
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: [
        '301, 3th Floor, Sai Vill Commercial Apartment, Next to Vaibhav Talkies, Behind RR Dage saries, Sr. No. 166, Malwadi Road, App. Sahyadri Hospital, Hadapsar, Pune 411028.',
      ],
    },
    {
      icon: <FaClock />,
      title: 'Visiting Hours',
      details: ['Monday - Saturday: 10am - 6pm'],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour12: true });
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      time: time,
    };

    emailjs
      .send('service_n50vpbc', 'template_oibson8', templateParams, 'Zg2-6o7_FK4yrOHZU')
      .then(() => {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message! We will get back to you soon.',
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setFormStatus({ submitted: false, success: false, message: '' }), 5000);
      })
      .catch((error) => {
        setFormStatus({
          submitted: true,
          success: false,
          message: 'Failed to send message, please try again.',
        });
        console.error(error);
        setTimeout(() => setFormStatus({ submitted: false, success: false, message: '' }), 5000);
      });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero/contact-hero-bg.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '700px',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div
          className="container mx-auto px-4 md:px-6 relative z-10 text-center"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '900px',
          }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Get in touch with our team to discuss your IT needs and how we can help.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <Section id='contact-form'>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="lg:col-span-1 bg-light p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex">
                  <div className="text-primary text-2xl mt-1 mr-4">{info.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4 text-primary text-xl">
                <a
                  href="https://www.facebook.com/people/JDIT-Software-solutions-Pvt-Ltd/61570376000478/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-primary/80"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/jdit.solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-primary/80"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/jdit-Software-solution-pvt-ltd/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-primary/80"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-light p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            {formStatus.submitted && (
              <div
                className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
              >
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>

              <div>
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </Section>

      {/* Map Section */}
      <Section withPadding={false}>
        <div className="h-96 w-full mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.615700222489!2d73.93028897524742!3d18.501058682588784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1e2ebb152cd%3A0xb7e6429c1217c04e!2sJDIT%20SOFTWARE%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1768384735018!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>


          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.615700222489!2d73.93028897524742!3d18.501058682588784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1e2ebb152cd%3A0xb7e6429c1217c04e!2sJDIT%20SOFTWARE%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1768384735018!5m2!1sen!2sin"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">

          </iframe> */}
        </div>
      </Section>
    </>
  );
};

export default Contact;