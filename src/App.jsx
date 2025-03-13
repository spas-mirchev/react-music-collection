import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Navbar from './components/Navbar';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import ArtistDetail from './pages/ArtistDetail';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="py-4">
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