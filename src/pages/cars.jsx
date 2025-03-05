import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useTheme } from '../context/ThemeContext';
import { useMouseEffect } from '../hooks/useMouseEffect';

const cars = [
  {
    name: "Toyota Corolla",
    image: "/cars/corolla.jpg",
    price: "$40/hour",
    features: ["Automatic", "Backup Camera", "Bluetooth"]
  },
  {
    name: "Honda Civic",
    image: "/cars/civic.jpg",
    price: "$38/hour",
    features: ["Automatic", "Apple CarPlay", "Lane Assist"]
  },
  // Add more cars...
];

export default function CarsPage() {
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

      <div className="max-w-7xl mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl font-bold ${
            isDarkMode ? 'text-yellow-400' : 'text-indigo-900'
          }`}>Available Cars</h1>
          <p className={`mt-4 text-xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>Choose the perfect car for your practice</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
              }`}>
                <CardContent>
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-yellow-400' : 'text-indigo-900'
                  }`}>{car.name}</h3>
                  <p className={`text-lg font-bold mb-4 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>{car.price}</p>
                  <ul className="space-y-2 mb-4">
                    {car.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckIcon className={`w-5 h-5 mr-2 ${
                          isDarkMode ? 'text-yellow-400' : 'text-indigo-600'
                        }`} />
                        <span className={
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${
                    isDarkMode 
                      ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500' 
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}>
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg 
      {...props}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M5 13l4 4L19 7" 
      />
    </svg>
  );
} 