import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          DriveLearn
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
          <NavLink to="/cars" active={location.pathname === "/cars"}>Cars</NavLink>
          <NavLink to="/partners" active={location.pathname === "/partners"}>Partners</NavLink>
          <NavLink to="/about" active={location.pathname === "/about"}>About</NavLink>
          <NavLink to="/contact" active={location.pathname === "/contact"}>Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col gap-4 px-4">
              <MobileNavLink to="/" active={location.pathname === "/"} onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/cars" active={location.pathname === "/cars"} onClick={() => setIsMenuOpen(false)}>
                Cars
              </MobileNavLink>
              <MobileNavLink to="/partners" active={location.pathname === "/partners"} onClick={() => setIsMenuOpen(false)}>
                Partners
              </MobileNavLink>
              <MobileNavLink to="/about" active={location.pathname === "/about"} onClick={() => setIsMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink to="/contact" active={location.pathname === "/contact"} onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ to, active, children }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.1 }}
      className="relative"
    >
      <Link 
        to={to} 
        className={`transition-colors ${active ? 'text-purple-200' : 'text-white hover:text-purple-200'}`}
      >
        {children}
      </Link>
      {active && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
          layoutId="underline"
        />
      )}
    </motion.div>
  );
}

function MobileNavLink({ to, active, children, onClick }) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`py-2 px-4 rounded-lg transition-colors ${
        active 
          ? 'bg-purple-800 text-purple-200' 
          : 'text-white hover:bg-purple-800'
      }`}
    >
      {children}
    </Link>
  );
} 