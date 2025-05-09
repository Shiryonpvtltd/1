// src/components/ui/SectionDivider.tsx
import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <div className="flex justify-center my-12">
      <motion.div 
        className="w-24 h-0.5 bg-red-500"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default SectionDivider;