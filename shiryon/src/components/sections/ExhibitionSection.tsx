// src/components/sections/ExhibitionSection.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ExhibitItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

const ExhibitionSection = () => {
  // Sample exhibition data
  const exhibits: ExhibitItem[] = [
    {
      id: 1,
      title: "Urban Sustainability",
      image: "/api/placeholder/600/400",
      description: "A showcase of innovative approaches to sustainable urban design and development."
    },
    {
      id: 2,
      title: "Future Living Spaces",
      image: "/api/placeholder/600/400",
      description: "Exploring how architecture adapts to evolving human needs and environmental challenges."
    },
    {
      id: 3,
      title: "Community Centers",
      image: "/api/placeholder/600/400",
      description: "Designs that foster social interaction and strengthen community bonds."
    },
    {
      id: 4,
      title: "Adaptive Reuse",
      image: "/api/placeholder/600/400",
      description: "Transforming existing structures for modern purposes while preserving their character."
    }
  ];

  const [selectedExhibit, setSelectedExhibit] = useState<ExhibitItem | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Exhibition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest architectural designs and concepts showcased in our virtual gallery.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {exhibits.map((exhibit) => (
            <motion.div
              key={exhibit.id}
              variants={item}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedExhibit(exhibit)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={exhibit.image} 
                  alt={exhibit.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{exhibit.title}</h3>
                <p className="text-gray-600 line-clamp-2">{exhibit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md">
            View All Projects
          </button>
        </motion.div>
      </div>

      {/* Modal for selected exhibit */}
      {selectedExhibit && (
        <motion.div 
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedExhibit(null)}
        >
          <motion.div 
            className="bg-white rounded-xl overflow-hidden max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-64 md:h-96 overflow-hidden">
              <img 
                src={selectedExhibit.image} 
                alt={selectedExhibit.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedExhibit.title}</h3>
              <p className="text-gray-600 mb-6">{selectedExhibit.description}</p>
              <div className="flex justify-end">
                <button 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg"
                  onClick={() => setSelectedExhibit(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ExhibitionSection;