// src/pages/Home.tsx
import IntroSection from '../components/sections/IntroSection';
import WhatWeBuildSection from '../components/sections/WhatWeBuildSection';
// import ThreePillarsSection from '../components/sections/ThreePillarsSection';
// import ExhibitionSection from '../components/sections/ExhibitionSection';
import Vision from '../components/sections/Vision';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';
import ThreePillars from '../components/sections/ThreePillars';
import WhatWeAreBuilding from '../components/sections/WhatWeAreBuilding';
import OurStrategy from '../components/sections/OurStrategy';

const Home = () => {
  return (
    
    <>
    
      {/* Each section is wrapped in a div with snap-start to enable smooth scrolling */}
      <div id="intro" >
        <IntroSection />
      </div>
      
      <div id="what-we-build" >
        <WhatWeBuildSection />
      </div>
      
{/*       
      <div id="strategy" >
        <StrategySection />
      </div> */}
      
      <div id="Whatwearebuilding" >
        <WhatWeAreBuilding />
      </div>

      <div id="ourstatergy" >
        <OurStrategy />
      </div>

      <div id="threepillars" >
        <ThreePillars />
      </div>

      <div id="vision" >
        <Vision />
      </div>

      {/* <div id="pillars" >
        <ThreePillarsSection />
      </div> */}
      

      {/* <div id="exhibition" >
        <ExhibitionSection />
      </div> */}
      
      <div id="contact" >
        <ContactSection />
      </div>
      
      <div id="footer" >
        <Footer />
      </div>
    </>
  );
};

export default Home;