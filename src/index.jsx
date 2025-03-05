import React from "react";
import { Button } from "./components/ui/button.jsx";
import { Card, CardContent } from "./components/ui/card.jsx";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      {/* Header */}
      <header className="p-6 bg-blue-600 text-white text-center text-2xl font-bold">
        Practice Driving with Ease – Rent a Car Today!
      </header>
      
      {/* Banner Section with animation */}
      <motion.div 
        className="relative h-96 bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/banner-image.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Button className="mt-4 bg-white text-blue-600 px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-gray-200">
          Find a Car
        </Button>
      </motion.div>

      {/* How It Works Section */}
      <section className="p-8 text-center">
        <h2 className="text-2xl font-bold">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { step: "1️⃣", text: "Browse available cars" },
            { step: "2️⃣", text: "Book & pay online" },
            { step: "3️⃣", text: "Start practicing" }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">{item.step}</h3>
              <p className="mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="p-8 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {["Great service for new drivers!", "Affordable and easy to book!", "Super easy process and great customer service!", "Highly recommended for beginners!"].map((testimonial, index) => (
            <Card key={index} className="p-4 shadow-lg">
              <CardContent>
                <p className="italic">"{testimonial}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-blue-600 text-white text-center mt-8">
        &copy; 2025 Car Rental Platform. All rights reserved.
      </footer>
    </div>
  );
} 