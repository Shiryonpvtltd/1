// src/components/ui/Logo.tsx
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';
type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-40 h-40',
  };

  return (
    <motion.div 
      className={`relative rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img 
        src={logo}
        alt="SHIRYON Logo" 
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default Logo;





