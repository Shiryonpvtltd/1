import { useRef } from 'react';
import { motion,   useInView } from 'framer-motion';
// Project data with placeholder images
const projects = [
  {
    id: 1,
    name: "T-Shirts",
    image: "/images/image1.jpg", // Update with your actual image path
    description: "Contemporary designs that blend form and function, featuring premium materials and unique prints."
  },
  {
    id: 2,
    name: "presses",
    image: "/images/image2.jpg", // Update with your actual image path
    description: "efficient solutions."
  },
  {
    id: 3,
    name: "squats",
    image: "/images/image3.jpg", // Update with your actual image path
    description: "efficient solutions."
  },
];

// ProjectCard component for each project
interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  
  return (
    <motion.div 
      ref={cardRef}
      className="relative flex flex-col md:flex-row items-center bg-black rounded-lg shadow-xl mb-24 mx-4 md:mx-12 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="w-full md:w-3/5 h-64 md:h-96 relative overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.name}
          className="absolute w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 " />
      </div>
      
      <div className="w-full md:w-2/5 p-6 md:p-8 bg-black text-white z-10">
        <motion.h3 
          className="text-2xl md:text-3xl font-bold mb-2 text-red-600"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        >
          {project.name}
        </motion.h3>
        <motion.p 
          className="text-gray-300 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        >
          {project.description}
        </motion.p>
        
      </div>
    </motion.div>
  );
};

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Jedidya Raju",
    role: "Founder",
    image: "/images/profile1.png"
  },
  {
    id: 2,
    name: "Charan A",
    role: "Co-Founder",
    image: "/images/profile1.png"
  },

];

// Team member card component
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="bg-black rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="relative h-64 overflow-hidden flex">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-red-500">{member.name}</h3>
        <p className="text-gray-400">{member.role}</p>
      </div>
    </motion.div>
  );
};

// Main WhatWEBuildSection component
const WhatWEBuildSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);


  
  const headerInView = useInView(headerRef, { once: false, amount: 0.3 });

  return (
    <section ref={sectionRef} className="min-h-screen bg-black text-white pt-16 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-red-600">What</span> We Build
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-red-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={headerInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We specialize in creating exceptional structures that blend innovative design with practical functionality.
          </motion.p>
        </div>

        {/* Projects Section */}
        <motion.div 
  className="mb-24"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
>

          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-red-600">Our Products</h3>
            <p className="text-gray-300 mt-2">Discover yourself</p>
          </div>
          <div className="space-y-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="mb-16 text-center">
          <motion.h3 
            className="text-3xl font-bold text-red-600 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Meet Our Team
          </motion.h3>
          <motion.p 
            className="text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            The talented professionals behind our exceptional work
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16 bg-gradient-to-r from-red-900 to-red-950 p-8 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Fitness?</h3>
          <p className="mb-6 text-gray-200">Let's create something amazing together</p>
          
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWEBuildSection;