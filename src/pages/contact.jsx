import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { useTheme } from '../context/ThemeContext';
import { useMouseEffect } from '../hooks/useMouseEffect';

export default function ContactPage() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  useMouseEffect(isDarkMode);

  return (
    <div className={`min-h-screen cursor-none ${
      isDarkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className={`text-5xl font-bold ${
            isDarkMode ? 'text-yellow-400' : 'text-indigo-900'
          }`}>Get in Touch</h1>
          <p className={`mt-4 text-xl ${
            isDarkMode ? 'text-gray-300' : 'text-indigo-600'
          }`}>We'd love to hear from you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`p-8 rounded-2xl shadow-xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${
              isDarkMode ? 'text-yellow-400' : 'text-indigo-900'
            }`}>Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className={`block mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Name</label>
                <input 
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'border border-gray-300 text-gray-900'
                  }`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className={`block mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Email</label>
                <input 
                  type="email"
                  className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'border border-gray-300 text-gray-900'
                  }`}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className={`block mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Message</label>
                <textarea 
                  className={`w-full px-4 py-2 h-32 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'border border-gray-300 text-gray-900'
                  }`}
                  placeholder="Your message..."
                />
              </div>
              <Button className={`w-full py-3 ${
                isDarkMode 
                  ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}>
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {[
              {
                title: "Visit Us",
                content: [
                  "Pride Pristine",
                  "Electronic City, Bangalore 560099",
                  "India"
                ]
              },
              {
                title: "Contact Info",
                content: [
                  "+91 8050624833",
                  "pranavpraveen0@gmail.com"
                ]
              },
              {
                title: "Business Hours",
                content: [
                  "Monday - Friday: 9:00 AM - 6:00 PM",
                  "Saturday: 10:00 AM - 4:00 PM",
                  "Sunday: Closed"
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                className={`p-6 rounded-xl shadow-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
              >
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? 'text-yellow-400' : 'text-indigo-900'
                }`}>{section.title}</h3>
                <div className={`space-y-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {section.content.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function PhoneIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
} 