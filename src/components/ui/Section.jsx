import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  className = '', 
  id,
  bgColor = 'bg-white',
  withContainer = true,
  withPadding = true,
  animate = true
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2
      } 
    }
  };

  const sectionClasses = `${bgColor} ${withPadding ? 'py-16 md:py-24' : ''} ${className}`;
  const contentClasses = withContainer ? 'container mx-auto px-4 md:px-6' : '';

  const SectionComponent = animate ? motion.section : 'section';
  const animateProps = animate ? {
    variants: containerVariants,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-100px' }
  } : {};

  return (
    <SectionComponent
      id={id}
      className={sectionClasses}
      {...animateProps}
    >
      <div className={contentClasses}>
        {children}
      </div>
    </SectionComponent>
  );
};

export default Section;