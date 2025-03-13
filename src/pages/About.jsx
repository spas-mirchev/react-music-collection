import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">About This Project</h1>
        <Link 
          to="/" 
          className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded"
        >
          Back to Home
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Music Collection App</h2>
        <p className="mb-4">
          This music collection application showcases albums from various artists. Users can browse albums 
          ordered by release date and view all albums by a specific artist.
        </p>
        
        <div className="space-y-4 mt-8">
          <div>
            <h3 className="text-lg font-medium">React</h3>
            <p>A JavaScript library for building the user interface</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">React Router</h3>
            <p>Handles navigation between different views in the application</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">JSON Server</h3>
            <p>Provides a mock API for album and artist data</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Tailwind CSS</h3>
            <p>Used for styling the application with a responsive design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 