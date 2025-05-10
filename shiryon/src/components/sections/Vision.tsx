import { motion } from "framer-motion";

const Vision = () => {
  return (
<section className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-24 relative">
      {/* Big number "3" */}
      <div className="absolute left-0 text-9xl text-red-600 font-bold ">4</div>      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-red-950 bg-opacity-20 p-10 md:p-14 rounded-2xl max-w-4xl text-center shadow-2xl border border-red-800"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-6">
          Founder’s Vision
        </h1>

        <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">
          I don’t build startups.  
          <br />I build what the world didn’t see coming.
        </p>

        <p className="text-gray-300 text-base leading-loose mb-4">
          <span className="text-white font-semibold">SHIRYON</span> isn’t just a brand — it’s a response to everything performance wear forgot.
        </p>

        <p className="text-gray-300 text-base leading-loose mb-4">
          Every venture I pursue begins where convention ends — not because it’s trendy, but because it’s necessary.
        </p>

        <p className="text-gray-300 text-base leading-loose mb-4">
          I operate at the edge of industries — where <span className="font-semibold text-white">OJJO</span>’s deep tech meets emotion, and <span className="font-semibold text-white">DUOBLT</span>’s travel meets intelligence.
        </p>

        <p className="text-gray-300 text-base leading-loose mb-4">
          If it’s obvious, it’s too late. If it already exists, I’m not interested.
        </p>

        <p className="text-gray-300 text-base leading-loose mb-6">
          <span className="font-semibold text-white">SHIRYON</span> is the first of three ventures currently in motion. The others?  
          <br />They’ll make the big players wish they got there first.
        </p>

        <p className="text-right text-red-500 font-medium mt-8">— Jedidya Raju, Founder, SHIRYON</p>
      </motion.div>
    </section>
  );
};

export default Vision;
