import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">About This Project</h1>
        <Link 
          to="/" 
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Back to Home
        </Link>
      </div>
      
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-white">Music Collection App</h2>
        <p className="mb-6 text-gray-300">
          This music collection application showcases albums from various artists. Users can browse albums 
          ordered by release date and view all albums by a specific artist.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-lg font-medium text-purple-400 mb-2">React</h3>
            <p className="text-gray-300">A JavaScript library for building the user interface</p>
          </div>
          
          <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 hover:border-blue-500 transition-colors duration-300">
            <h3 className="text-lg font-medium text-blue-400 mb-2">React Router</h3>
            <p className="text-gray-300">Handles navigation between different views in the application</p>
          </div>
          
          <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-lg font-medium text-purple-400 mb-2">JSON Server</h3>
            <p className="text-gray-300">Provides a mock API for album and artist data</p>
          </div>
          
          <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 hover:border-blue-500 transition-colors duration-300">
            <h3 className="text-lg font-medium text-blue-400 mb-2">Tailwind CSS</h3>
            <p className="text-gray-300">Used for styling the application with a responsive design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 