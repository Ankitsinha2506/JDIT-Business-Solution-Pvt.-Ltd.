import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logoImage from '../../assets/images/logo.png';

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
    { icon: <FaFacebook />, url: 'https://www.facebook.com/people/JDIT-Software-solutions-Pvt-Ltd/61570376000478/' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/jdit.solutions/' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/company/jdit-Software-solution-pvt-ltd/posts/?feedView=all' },
  ];

  return (
    <>
      <style>
        {`
          /* Fade-in animation */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeIn 0.6s ease forwards;
          }
          /* Underline animation for links */
          .footer-link {
            position: relative;
            transition: color 0.3s ease;
          }
          .footer-link::after {
            content: '';
            position: absolute;
            width: 0%;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #f97316; /* Tailwind orange-500 */
            transition: width 0.3s ease;
          }
          .footer-link:hover::after {
            width: 100%;
          }
        `}
      </style>

      <footer className="bg-dark text-white pt-16 pb-8 fade-in">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center mb-8">
                <img src={logoImage} alt="JDIT" className="h-12 w-auto" />
                <span className="text-xl font-medium ml-2 text-white">Software Solutions Pvt. Ltd.</span>
              </Link>
              <p className="text-gray-400 mb-8 max-w-md">
                JDIT is a software development company specializing in custom software solutions for various industries.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors duration-300 rounded-full hover:bg-accent/20 p-2 hover:scale-110 transform text-3xl"
                    aria-label="social-link"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="footer-link text-gray-400 hover:text-accent transition-colors duration-300"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center">
                <FaPhoneAlt className="text-accent mr-3 flex-shrink-0" />
                <span className="text-sm">+91 7057676132</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-accent mr-3 flex-shrink-0" />
                <a
                  href="mailto:hr@jditbs.com"
                  className="text-sm hover:text-accent transition-colors duration-300"
                >
                  hr@jditbs.com
                </a>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  301, 3th Floor, Sai Vill Commercial Apartment,<br />
                  Next to Vaibhav Talkies, Behind RR Dage saries, Sr. No. 166,<br />
                  Malwadi Road, App. Sahyadri Hospital, Hadapsar, Pune 411028.
                </span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; {currentYear} JDIT Software Solutions Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
