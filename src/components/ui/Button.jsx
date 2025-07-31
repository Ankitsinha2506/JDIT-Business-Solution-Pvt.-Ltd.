import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href, 
  to, 
  ...props 
}) => {
  // Styles based on variant
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    accent: 'bg-accent text-white hover:bg-accent/90',
    outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10',
    ghost: 'bg-transparent text-primary hover:bg-primary/10',
  };

  // Styles based on size
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2';
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // If href is provided, render an anchor tag
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }

  // If to is provided, render a Link component
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  // Otherwise, render a button
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;