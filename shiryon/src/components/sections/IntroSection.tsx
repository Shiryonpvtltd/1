import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const IntroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('what-we-build');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Radial red-black gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.2),_black)] z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 z-10">
      <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
    We see. We build. We dominate.
  </h1>

  <p className="text-xl md:text-2xl mb-6 max-w-2xl">
    Revolutionizing Gym Apparel
  </p>

  <p className="text-lg md:text-xl mb-10 max-w-3xl text-gray-300">
    <strong>SHIRYON</strong>: is not another activewear label. We are creating a new category. <br /> <em>Dedicated Gymwear</em> — apparel engineered for squats, pulls, and presses.
  </p>

  <button
    className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
    onClick={() => alert("Let's start building together!")}
  >
    Join Our Vision
  </button>
</div>

      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToNextSection}
      >
        <ArrowDown className="text-white" size={32} />
      </div>
    </section>
  );
};

export default IntroSection;
