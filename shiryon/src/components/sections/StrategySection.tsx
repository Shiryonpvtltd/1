// src/components/sections/StrategySection.tsx
import { useState } from 'react';
import { ChevronRight, Target, Search, Lightbulb, Code, Zap, CheckCircle } from 'lucide-react';

const StrategySection = () => {
  const [activePhase, setActivePhase] = useState(0);
  
  const phases = [
    {
      title: "Discovery",
      icon: <Search className="w-6 h-6" />,
      description: "We start by understanding your business, goals, and challenges through in-depth research and stakeholder interviews.",
      steps: [
        "Stakeholder interviews",
        "Market research",
        "Competitive analysis",
        "User research",
        "Defining success metrics"
      ]
    },
    {
      title: "Strategy",
      icon: <Target className="w-6 h-6" />,
      description: "Based on insights gathered, we develop a comprehensive strategy that aligns with your business objectives.",
      steps: [
        "Business requirements",
        "Technical assessment",
        "Roadmap planning",
        "Resource allocation",
        "Risk assessment"
      ]
    },
    {
      title: "Ideation",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Our creative process generates innovative solutions to address the identified challenges and opportunities.",
      steps: [
        "Concept development",
        "Solution brainstorming",
        "Sketching & wireframing",
        "Early prototyping",
        "Feedback collection"
      ]
    },
    {
      title: "Development",
      icon: <Code className="w-6 h-6" />,
      description: "We bring concepts to life through agile development, ensuring quality and performance at every step.",
      steps: [
        "Architecture design",
        "Sprint planning",
        "Iterative development",
        "Code reviews",
        "Performance optimization"
      ]
    },
    {
      title: "Deployment",
      icon: <Zap className="w-6 h-6" />,
      description: "We launch your solution with careful planning to ensure a smooth transition and minimal disruption.",
      steps: [
        "Testing & QA",
        "Staging environment",
        "Soft launch",
        "Monitoring setup",
        "Rollout strategy"
      ]
    },
    {
      title: "Growth",
      icon: <CheckCircle className="w-6 h-6" />,
      description: "Post-launch, we focus on continuous improvement, gathering data and feedback to optimize performance.",
      steps: [
        "Performance analytics",
        "User feedback",
        "Iterative improvements",
        "Scaling strategy",
        "Ongoing support"
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Strategy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that delivers results, transforming ideas into impactful digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-2xl font-semibold mb-6">Development Journey</h3>
              
              <div className="space-y-2">
                {phases.map((phase, index) => (
                  <button
                    key={index}
                    className={`flex items-center w-full p-4 rounded-lg transition-all duration-300 ${
                      activePhase === index
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActivePhase(index)}
                  >
                    <div className={`p-2 rounded-full mr-3 ${
                      activePhase === index ? 'bg-blue-200' : 'bg-gray-200'
                    }`}>
                      {phase.icon}
                    </div>
                    <span className="font-medium">{phase.title}</span>
                    <ChevronRight className={`ml-auto w-5 h-5 transition-transform ${
                      activePhase === index ? 'transform rotate-90' : ''
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  {phases[activePhase].icon}
                </div>
                <h3 className="text-3xl font-bold">{phases[activePhase].title}</h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-8">
                {phases[activePhase].description}
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-xl">Key Activities:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {phases[activePhase].steps.map((step, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="font-medium text-blue-800">{idx + 1}</span>
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-12 flex">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Learn more about our {phases[activePhase].title} phase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;