import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { useTheme } from '../context/ThemeContext';
import { useMouseEffect } from '../hooks/useMouseEffect';

const partners = [
  {
    name: "DriveRight Academy",
    logo: "/partners/driveright.jpg",
    description: "Premier driving school with over 20 years of experience.",
    benefits: ["Certified instructors", "Flexible scheduling", "Modern facilities"]
  },
  {
    name: "SafeDrive Institute",
    logo: "/partners/safedrive.jpg",
    description: "Specialized in defensive driving techniques.",
    benefits: ["Comprehensive courses", "One-on-one training", "Safety first approach"]
  },
  // Add more partners...
];

export default function PartnersPage() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  useMouseEffect(isDarkMode);

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

      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h1 className={`text-3xl sm:text-4xl font-bold ${
            isDarkMode ? 'text-yellow-400' : 'text-purple-900'
          }`}>Our Trusted Partners</h1>
          <p className={`mt-4 text-lg sm:text-xl ${
            isDarkMode ? 'text-gray-300' : 'text-purple-600'
          }`}>Learn from the best in the industry</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full hover:shadow-xl transition-shadow ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
              }`}>
                <CardContent>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-16 h-16 rounded-full object-cover mx-auto sm:mx-0"
                    />
                    <h3 className={`text-xl sm:text-2xl font-semibold text-center sm:text-left ${
                      isDarkMode ? 'text-yellow-400' : 'text-purple-900'
                    }`}>
                      {partner.name}
                    </h3>
                  </div>
                  <p className={`text-center sm:text-left ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {partner.description}
                  </p>
                  <div className="space-y-3 mt-6">
                    {partner.benefits.map(benefit => (
                      <motion.div
                        key={benefit}
                        className={`flex items-center ${
                          isDarkMode ? 'text-yellow-400' : 'text-purple-700'
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        <StarIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg 
      {...props}
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
} 