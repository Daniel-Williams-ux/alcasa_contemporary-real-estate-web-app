import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ContactIcon from '@mui/icons-material/ContactPage';
import Contact from './Contact';


function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);
  

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: '0%', transition: { staggerChildren: 0.4, duration: 0.2 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: '0%' },
  };


  return (
    <header className="text-black py-4 shadow-md fixed top-0 left-0 w-full z-50 bg-white">
      <AnimatePresence>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center justify-start">
            <Button
              onClick={() => setMenuOpen(!isMenuOpen)}
              colorScheme="blackAlpha"
              variant="outline"
              rounded="md"
              px={3}
              py={2}
              focus="outline-none"
              className="font-mono hover:text-slate-600 antialiased font-semibold"
            >
              ☰ Menu
            </Button>
          </div>
          {isMenuOpen && (
            <motion.nav
            ref={menuRef}

              initial={{ transform: 'translateX(-100%)' }}
              animate={{ transform: isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)' }}
              transition={{ duration: 0.5 }}
              className={`absolute top-0 left-0 h-screen w-full bg-background text-black shadow-lg overflow-hidden transform max-w-xl ${isMenuOpen ? 'animate-menu' : '-translate-x-full'}`}
            >
              {isMenuOpen && (
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-black text-lg border-none rounded px-3 py-2 focus:outline-none font-semibold font-mono hover:font-serif antialiased"
                >
                  ✕ Close
                </button>
              )}
              <div className="overlay bg-overlay"></div>
              <motion.ul
                initial="hidden"
                animate={isMenuOpen ? 'visible' : 'hidden'}
                variants={menuVariants}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="flex flex-col items-center  space-y-8 py-8 my-64"
              >

                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  variants={menuItemVariants}
                  initial={{ opacity: 0, x: isMenuOpen ? 0 : -100 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -100 }}
                  className="p-2 font-mono text-xl hover:font-serif font-semibold antialiased tracking-wide leading-loose"
                >
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </motion.li>
              
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  variants={menuItemVariants}
                  initial={{ opacity: 0, x: isMenuOpen ? 0 : -100 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -100 }}
                  className="p-2 font-mono text-xl hover:font-serif font-semibold antialiased tracking-wide leading-loose"
                >
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    Residences
                  </Link>
                </motion.li>

                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  variants={menuItemVariants}
                  className="p-2 font-mono text-xl hover:font-serif font-semibold antialiased tracking-wide leading-loose"
                >
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    Bespoke
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  variants={menuItemVariants}
                  className="p-2 font-mono text-xl hover:font-serif font-semibold antialiased tracking-wide leading-loose"
                >
                  <Link to="/about" onClick={() => setMenuOpen(false)}>
                    About
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  variants={menuItemVariants}
                  className="p-2 font-mono text-xl hover:font-serif font-semibold antialiased tracking-wide leading-loose"
                >
                  <Link to="/experience-o2" onClick={() => setMenuOpen(false)}>
                    ExperienceO2
                  </Link>
                </motion.li>
                
              </motion.ul>
            </motion.nav>
          )}
          <div className="logo">
            <img className="h-10 sm:h-10  contrast-200" src="/alcasa-logo.jpg" alt="alcasa Logo" />
          </div>

          <div className="logo hidden sm:inline">
          <span className="font-mono font-semibold antialiased tracking-wide leading-loose  mx-1 cursor-grab"
          onClick={() => navigate('/contact')} 
          >
            <ContactIcon />  CONNECT NOW</span>
          <button className="text-black ml-4 focus:outline-none">
          </button>
          </div>
        </div>
      </AnimatePresence>
    </header>
  );
}

export default Header;
