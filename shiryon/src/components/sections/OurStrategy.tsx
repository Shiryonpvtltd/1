// OurStrategy.tsx
import { motion } from "framer-motion";

const OurStrategy = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-24 relative">
      {/* Big number "3" */}
      <div className="absolute left-0 text-9xl text-red-600 font-bold ">2</div>

      <motion.div
        className="max-w-3xl w-full bg-red-950 bg-opacity-10 p-8 rounded-xl text-center shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Our Strategy</h2>

        <p className="text-lg text-gray-300 mb-6">
          <span className="font-semibold text-white">“Our unfair advantage is how we see.”</span> We don’t copy models. We create them — with storytelling, design intelligence, and strategic restraint.
        </p>
      </motion.div>
    </section>
  );
};

export default OurStrategy;
