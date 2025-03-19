import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import ArtistDetail from './pages/ArtistDetail';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 relative overflow-hidden">
        {/* Dots mesh pattern overlay - improved visibility */}
        <div className="absolute inset-0 opacity-20"
             style={{
               backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1.5px, transparent 1.5px), radial-gradient(circle, rgba(120,120,255,0.4) 1px, transparent 1px)',
               backgroundSize: '30px 30px, 20px 20px',
               backgroundPosition: '0 0, 15px 15px'
             }}>
        </div>
        
        {/* Gradient overlay for dynamic look */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/30"></div>
        
        <Navbar />
        <main className="py-4 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/artists/:id" element={<ArtistDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App; 