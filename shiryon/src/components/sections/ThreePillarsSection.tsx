// src/components/sections/ThreePillarsSection.tsx
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShieldCheck, Sparkles, BarChart } from 'lucide-react';

const ThreePillarsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const pillars = [
    {
      icon: <Sparkles className="w-16 h-16 text-amber-500" />,
      title: "Innovation",
      description: "We push boundaries and challenge conventions to deliver forward-thinking solutions that anticipate future needs.",
      benefits: [
        "Cutting-edge technology implementation",
        "Emerging trends adoption",
        "Creative problem-solving approaches",
        "Continuous learning and improvement"
      ],
      color: "amber"
    },
    {
      icon: <ShieldCheck className="w-16 h-16 text-teal-500" />,
      title: "Quality",
      description: "We maintain the highest standards in every aspect of our work, from code quality to user experience design.",
      benefits: [
        "Rigorous testing methodologies",
        "Adherence to best practices",
        "Attention to detail",
        "Performance optimization"
      ],
      color: "teal"
    },
    {
      icon: <BarChart className="w-16 h-16 text-indigo-500" />,
      title: "Results",
      description: "We focus on delivering measurable outcomes that drive business growth and create real value for users.",
      benefits: [
        "Data-driven decision making",
        "Performance metrics tracking",
        "ROI-focused strategies",
        "Continuous optimization"
      ],
      color: "indigo"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-rotate through pillars
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % pillars.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isVisible, pillars.length]);

  const getGradientClass = (color: string) => {
    const gradients = {
      amber: "from-amber-500 to-amber-300",
      teal: "from-teal-500 to-teal-300",
      indigo: "from-indigo-500 to-indigo-300"
    };
    
    return gradients[color as keyof typeof gradients] || "";
  };

  const getBgClass = (color: string) => {
    const backgrounds = {
      amber: "bg-amber-100",
      teal: "bg-teal-100",
      indigo: "bg-indigo-100"
    };
    
    return backgrounds[color as keyof typeof backgrounds] || "";
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Three Pillars</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The core principles that guide everything we do and define our approach to digital excellence.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className={`flex-1 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              } ${activeIndex === idx ? 'ring-4 ring-offset-4 ' + getBgClass(pillar.color) : 'bg-white'}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
              onClick={() => setActiveIndex(idx)}
            >
              <div className={`w-full h-2 bg-gradient-to-r ${getGradientClass(pillar.color)}`}></div>
              <div className="p-8">
                <div className={`rounded-full w-24 h-24 flex items-center justify-center mb-6 ${getBgClass(pillar.color)}`}>
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-gray-600 mb-6">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
        }`}>
          <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
            <div className={`rounded-full p-4 mr-4 ${getBgClass(pillars[activeIndex].color)}`}>
              {pillars[activeIndex].icon}
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">{pillars[activeIndex].title} in Action</h3>
              <p className="text-gray-600">How we implement our {pillars[activeIndex].title.toLowerCase()} pillar in every project</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars[activeIndex].benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start">
                <div className={`p-2 rounded-full mr-3 ${getBgClass(pillars[activeIndex].color)}`}>
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${getGradientClass(pillars[activeIndex].color)} flex items-center justify-center text-white font-bold`}>
                    {idx + 1}
                  </div>
                </div>
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-end">
            <button className={`px-6 py-3 rounded-lg text-white flex items-center bg-gradient-to-r ${getGradientClass(pillars[activeIndex].color)} hover:shadow-lg transition-all`}>
              Learn more about our approach
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreePillarsSection;