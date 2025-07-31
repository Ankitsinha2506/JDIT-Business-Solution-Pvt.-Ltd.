import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = ({ 
  title, 
  subtitle, 
  content, 
  icon, 
  image, 
  link, 
  linkText = 'Learn More',
  className = '',
  hoverEffect = true,
  animate = true
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  const baseClasses = 'bg-white rounded-lg shadow-md overflow-hidden';
  const hoverClasses = hoverEffect ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg' : '';
  const cardClasses = `${baseClasses} ${hoverClasses} ${className}`;

  const CardComponent = animate ? motion.div : 'div';
  const animateProps = animate ? {
    variants: cardVariants
  } : {};

  return (
    <CardComponent className={cardClasses} {...animateProps}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      )}
      <div className="p-6">
        {icon && (
          <div className="text-primary text-3xl mb-4">
            {icon}
          </div>
        )}
        {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
        {subtitle && <h4 className="text-gray-600 mb-3">{subtitle}</h4>}
        {content && <p className="text-gray-700 mb-4">{content}</p>}
        {link && (
          <Link 
            to={link} 
            className="text-primary font-medium hover:underline inline-flex items-center"
          >
            {linkText}
            <svg 
              className="w-4 h-4 ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
        )}
      </div>
    </CardComponent>
  );
};

export default Card;