import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useMouseEffect } from '../hooks/useMouseEffect';

export default function AboutPage() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  useMouseEffect(isDarkMode);
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className={`min-h-screen cursor-none ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Dark Mode Toggle Button */}
      <motion.button
        className={`fixed top-4 right-4 p-2 rounded-full z-50 ${
          isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-900 text-yellow-400'
        }`}
        onClick={() => setIsDarkMode(!isDarkMode)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </motion.button>

      <div className="max-w-7xl mx-auto py-16 px-4">
        <motion.div 
          className="text-center mb-16"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1 className={`text-5xl font-bold ${
            isDarkMode ? 'text-yellow-400' : 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'
          }`}>
            Our Story
          </h1>
          <p className={`mt-4 text-xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Empowering new drivers with confidence and skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img 
              src="/about/team.jpg" 
              alt="Our Team" 
              className="rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className={`text-3xl font-bold ${
              isDarkMode ? 'text-yellow-400' : 'text-indigo-900'
            }`}>
              More Than Just Car Rental
            </h2>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              Founded in 2020, we started with a simple mission: make learning to drive 
              accessible and stress-free for everyone. Our platform connects aspiring 
              drivers with quality vehicles and expert instructors.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { number: "5000+", label: "Happy Students" },
                { number: "100+", label: "Certified Cars" },
                { number: "98%", label: "Pass Rate" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={`text-center p-4 rounded-lg shadow-lg ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                >
                  <div className={`text-2xl font-bold ${
                    isDarkMode ? 'text-yellow-400' : 'text-indigo-600'
                  }`}>{stat.number}</div>
                  <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className={`mt-24 rounded-2xl shadow-xl p-8 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            isDarkMode ? 'text-yellow-400' : 'text-indigo-900'
          }`}>
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Excellence",
                description: "We maintain high standards in everything we do."
              },
              {
                icon: "🤝",
                title: "Support",
                description: "Always here to help you succeed in your journey."
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "Continuously improving our services and methods."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className={`text-center p-6 rounded-xl ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gradient-to-b from-indigo-50 to-white'
                }`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (index * 0.1) }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-yellow-400' : 'text-indigo-900'
                }`}>
                  {value.title}
                </h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 