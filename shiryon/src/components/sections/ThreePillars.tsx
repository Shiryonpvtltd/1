// ThreePillars.tsx
import { motion } from "framer-motion";

const ThreePillars = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-24 relative">
      {/* Big number "1" */}
      <div className="absolute left-0 text-9xl text-red-600 font-bold ">3</div>

      <motion.div
        className="max-w-3xl w-full bg-red-950 bg-opacity-10 p-8 rounded-xl text-center shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Three Pillars</h2>

        <p className="text-lg text-gray-300 mb-6">
          <span className="font-semibold text-white">Product Development:</span> Prototyping with award-winning industrial design firms from Poland.
        </p>

        <p className="text-lg text-gray-300 mb-6">
          <span className="font-semibold text-white">Jedidya Raju – Founder | Vision Lead:</span> A product thinker with a storyteller’s instinct.
        </p>

        <p className="text-lg text-gray-300 mb-6">
          <span className="font-semibold text-white">Charan A – Co-Founder | Operations Lead:</span> Translates strategy into production—from concept to delivery.
        </p>

        <p className="text-lg text-gray-300">
          <span className="font-semibold text-white">Global Team:</span> Specialists in biomechanics, apparel engineering, and industrial prototyping.
        </p>
      </motion.div>
    </section>
  );
};

export default ThreePillars;
