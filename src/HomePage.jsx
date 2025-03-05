import React, { useEffect, useState } from "react";
import { Button } from "./components/ui/button.jsx";
import { Card, CardContent } from "./components/ui/card.jsx";
import { motion } from "framer-motion";
import { ParallaxSection } from "./components/ui/parallax.jsx";
import { useTheme } from './context/ThemeContext';
import { useMouseEffect } from './hooks/useMouseEffect';

export default function HomePage() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  useMouseEffect(isDarkMode);

  return (
    <div className={`min-h-screen cursor-none ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-blue-900'
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

      {/* Hero Section with Parallax */}
      <ParallaxSection 
        bgImage="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070"
        height="h-[80vh]"
      >
        <div className="flex flex-col items-center justify-center h-full text-white px-4">
          <motion.h1 
            className="text-4xl sm:text-6xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Start Your Driving Journey Today
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl mb-8 max-w-2xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Experience the freedom of learning to drive with our premium vehicles and expert guidance
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:bg-blue-50 transform hover:scale-105 transition-all">
              Get Started
            </Button>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* How It Works Section */}
      <section className={`py-20 px-8 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-gray-800 to-gray-900' 
          : 'bg-gradient-to-b from-blue-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className={`text-4xl font-bold text-center mb-16 ${
              isDarkMode ? 'text-yellow-400' : 'text-blue-900'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: "1", 
                icon: "🚗",
                title: "Choose Your Car",
                text: "Browse our selection of well-maintained vehicles" 
              },
              { 
                step: "2", 
                icon: "📅",
                title: "Book Your Time",
                text: "Select your preferred date and duration" 
              },
              { 
                step: "3", 
                icon: "🎯",
                title: "Start Learning",
                text: "Begin your journey with confidence" 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="relative p-8 bg-white rounded-2xl shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="text-4xl mb-4 text-center mt-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-3">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Parallax */}
      <ParallaxSection 
        bgImage="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070"
        height="h-[60vh]"
      >
        <div className="flex items-center justify-center h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-8">
            {[
              { title: "Premium Cars", value: "50+", suffix: "vehicles" },
              { title: "Happy Students", value: "1000+", suffix: "learners" },
              { title: "Pass Rate", value: "98%", suffix: "success" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h4 className="text-xl font-semibold mb-2">{stat.title}</h4>
                <div className="text-4xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <p className="text-gray-600">{stat.suffix}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Students Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "The best decision I made for learning to drive. Amazing experience!",
                author: "Sarah M.",
                role: "New Driver"
              },
              {
                text: "Professional service and well-maintained cars. Highly recommended!",
                author: "John D.",
                role: "Student Driver"
              },
              {
                text: "Flexible scheduling and patient instructors. Couldn't ask for more!",
                author: "Mike R.",
                role: "Licensed Driver"
              },
              {
                text: "Great value for money and excellent learning experience!",
                author: "Emma L.",
                role: "New Driver"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent>
                    <div className="flex flex-col h-full">
                      <div className="text-2xl text-blue-600 mb-4">"</div>
                      <p className="italic flex-grow">{testimonial.text}</p>
                      <div className="mt-4 pt-4 border-t">
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of successful drivers who started their journey with us
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button className="bg-white text-blue-600 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:bg-blue-50">
              Book Your First Lesson
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DriveLearn</h3>
            <p className="text-gray-400">Making driving education accessible and enjoyable for everyone.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Cars</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Driving Street</li>
              <li>Learn City, LC 12345</li>
              <li>info@drivelearn.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          &copy; 2024 DriveLearn. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const styles = `
  .cursor-effect {
    position: fixed;
    width: 24px;
    height: 24px;
    pointer-events: none;
    z-index: 9999;
    transition: width 0.2s, height 0.2s;
    mix-blend-mode: difference;
    clip-path: polygon(
      30% 0%, 
      70% 0%, 
      100% 30%, 
      100% 70%, 
      70% 100%, 
      30% 100%, 
      0% 70%, 
      0% 30%
    );
    background: rgba(255, 200, 0, 0.8);
    transform-origin: center;
    left: 0;
    top: 0;
  }

  .cursor-trail {
    position: fixed;
    width: 12px;
    height: 12px;
    pointer-events: none;
    z-index: 9998;
    transition: transform 0.1s;
    background: rgba(255, 200, 0, 0.3);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    left: 0;
    top: 0;
  }

  .cursor-glow {
    position: fixed;
    width: 40px;
    height: 40px;
    pointer-events: none;
    z-index: 9997;
    transition: transform 0.15s ease-out;
    background: radial-gradient(circle, rgba(255, 200, 0, 0.2) 0%, rgba(255, 200, 0, 0) 70%);
    clip-path: polygon(
      50% 0%,
      80% 10%,
      100% 35%,
      100% 70%,
      80% 90%,
      50% 100%,
      20% 90%,
      0% 70%,
      0% 35%,
      20% 10%
    );
    left: 0;
    top: 0;
  }

  .cursor-hover {
    width: 32px;
    height: 32px;
    transform: rotate(45deg);
  }

  .trail-hover {
    transform: scale(2) rotate(45deg) !important;
    opacity: 0.5;
  }

  .glow-hover {
    transform: scale(3) !important;
  }
`; 