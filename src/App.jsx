import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/ui/navigation';
import HomePage from './HomePage';
import CarsPage from './pages/cars';
import PartnersPage from './pages/partners';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<CarsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
} 