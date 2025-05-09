// src/components/ui/AnimatedHeading.tsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type AnimatedHeadingProps = {
  number: string | number;
  title: string;
  className?: string;
};

const AnimatedHeading = ({ number, title, className = '' }: AnimatedHeadingProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className={`flex items-center ${className}`}>
      <motion.span 
        className="text-2xl font-bold text-red-500 mr-2 opacity-0"
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {number}
      </motion.span>
      
      <span className="h-0.5 w-8 bg-red-500 mx-2"></span>
      
      <motion.span 
        className="text-sm uppercase tracking-widest font-bold text-red-500"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.span>
    </div>
  );
};

export default AnimatedHeading;