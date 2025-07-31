import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/about#team' },
        { name: 'Careers', path: '/careers' },
        { name: 'News & Blog', path: '/blog' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', path: '/services#web-development' },
        { name: 'Mobile Apps', path: '/services#mobile-apps' },
        { name: 'Cloud Solutions', path: '/services#cloud-solutions' },
        { name: 'IT Consulting', path: '/services#it-consulting' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
  ];

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">JDIT</span>
              <span className="text-xl font-medium ml-1 text-accent">Business Solutions</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              JDIT is a software development company specializing in custom software solutions for various industries.            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors duration-300 text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <FaPhoneAlt className="text-accent mr-3" />
              <span>+91 7057676132</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-accent mr-3" />
              <a href="mailto:info@jditbusiness.com" className="hover:text-accent transition-colors duration-300">
                hr@jditbs.com
              </a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-accent mr-3" />
              <span>
                301, 3th Floor, Sai Vill Commercial Apartment,
                Next to Vaibhav Talkies, Behind RR Dage saries, Sr. No. 166,
                Malwadi Road, App. Sahyadri Hospital , Hadapsar, Pune 411028.
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} JDIT Business Solutions Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;