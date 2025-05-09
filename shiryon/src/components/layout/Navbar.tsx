import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: 'What We Build', href: '#what-we-build' },
  { name: 'Our Goal', href: '#whatwearebuilding' },
  { name: 'Our Statergy', href: '#ourstatergy' },
  { name: 'Thee Pillars', href: '#threepillars' },
  { name: 'Our Vision', href: '#vision' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      clipPath: 'circle(0px at calc(100% - 44px) 44px)',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      clipPath: 'circle(150% at calc(100% - 44px) 44px)',
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <header className="fixed top-0 right-0 w-full z-40">
      {/* Compact Glossy Navbar */}
      <div className="w-full h-18 flex items-center justify-between px-4 md:px-8 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
          <span className="text-white text-2xl font-cursive">Shiryon</span>
        </div>

        {/* Hamburger */}
        <button
          className={`w-12 h-12 rounded-full flex flex-col justify-center items-center z-50 transition-colors duration-300 overflow-visible ${
            isOpen ? '' : 'gap-1'
          } ${scrolled || isOpen ? 'bg-red-500' : 'bg-black bg-opacity-50'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-5 h-0.5 bg-white block"
            animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-5 h-0.5 bg-white block"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-5 h-0.5 bg-white block"
            animate={isOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed inset-0 bg-white/10 backdrop-blur-2xl border border-white/10 flex flex-col justify-center items-center z-40"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.ul className="flex flex-col items-center space-y-8">
              {navItems.map((item, i) => (
                <motion.li key={i} variants={itemVariants}>
                  <a
                    href={item.href}
                    className="text-white text-2xl font-light hover:text-red-500 hover:font-normal transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={itemVariants}
              className="absolute bottom-12 left-0 w-full text-center text-white text-sm"
            >
              <p className="uppercase tracking-widest backdrop-blur-sm bg-white/10 px-4 py-2 rounded-lg">
                Vidēmus. Ædificāmus. Domināmur.
              </p>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
