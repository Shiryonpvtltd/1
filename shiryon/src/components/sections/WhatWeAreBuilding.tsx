// WhatWeAreBuilding.tsx
import React from "react";
import { motion } from "framer-motion";

const WhatWeAreBuilding = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-24 relative">
      {/* Big number "2" */}
      <div className="absolute left-0 text-9xl text-red-600 font-bold z-10">1</div>

      <motion.div
        className="max-w-3xl w-full bg-red-950 bg-opacity-10 p-8 rounded-xl text-center shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">What We’re Building</h2>

        <p className="text-lg text-gray-300 mb-6">
          <span className="font-semibold text-white">SHIRYON:</span> is not another activewear label. We are creating a new category: Dedicated Gymwear — apparel engineered for squats, pulls, and presses.
        </p>

        <p className="text-lg text-gray-300 mb-6">
          The global fitness apparel market (~$200 billion by 2028) is saturated — but strength-focused athletes remain overlooked.
        </p>

        <p className="text-lg text-gray-300 mb-6">
          While yoga, running, and lifestyle segments dominate, the weight room has been left behind. <span className="font-semibold text-white">SHIRYON</span> fills that gap.
        </p>
      </motion.div>
    </section>
  );
};

export default WhatWeAreBuilding;
