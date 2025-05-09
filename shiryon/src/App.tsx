import './index.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import CustomCursor from './components/ui/CustomCursor';
import Logo from './assets/logo.png';
import Navbar from './components/layout/Navbar';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Show fixed logo after intro animation completes
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 6000);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(logoTimer);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Custom cursor */}
      <CustomCursor />

      {/* Initial loading animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: [0.8, 1.2, 0.9, 1] 
              }}
              transition={{ 
                duration: 1.5,
                times: [0, 0.3, 0.6, 1],
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-24 h-24 relative"
            >
              <div className="absolute inset-0 border-4 border-red-500 rounded-full opacity-30"></div>
              <div className="absolute inset-0 border-t-4 border-white rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={Logo} 
                  alt="SHIRYON" 
                  className="w-16 h-16 object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden">
        <Home />
      </main>
    </div>
  );
};

export default App;