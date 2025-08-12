// src/data/servicesData.js
import {
    FaChartLine,
    FaCloud,
    FaCogs,
    FaDatabase,
    FaLaptopCode,
    FaMobileAlt,
    FaShieldAlt,
    FaUsers
} from "react-icons/fa";

export const services = [
    {
        id: 'web-design',
        title: 'Web Design',
        description: 'Creative and modern web designs tailored to your brand.',
        icon: FaLaptopCode,
        features: [
            'Responsive and mobile-friendly designs',
            'User-centered layout',
            'Brand-focused visual elements',
            'Figma/Adobe XD mockups',
            'HTML/CSS prototyping',
            'Design consistency across pages'
        ],
        image: 'https://i.pinimg.com/1200x/5f/15/3e/5f153ea304e601d9d9cdd622ced582cb.jpg',


    },
    {
        id: 'web-development',
        title: 'Web Development',
        description: 'Robust and scalable websites built with cutting-edge technologies.',
        icon: FaLaptopCode,
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
        icon: FaChartLine,
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
        icon: FaShieldAlt,
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
        icon: FaChartLine,
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
        icon: FaDatabase,
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
        icon: FaCloud,
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
        icon: FaCogs,
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
        icon: FaMobileAlt,
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
        icon: FaUsers,
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
        icon: FaDatabase,
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
        icon: FaChartLine,
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
