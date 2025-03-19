import React from 'react';
import PickOfTheWeek from '../components/PickOfTheWeek';
import LatestReleases from '../components/LatestReleases';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          Music Collection
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore our curated collection of albums from various artists. 
          Discover new music and revisit classics across all genres.
        </p>
      </div>
      
      {/* Pick of the Week section - based on popularity */}
      <PickOfTheWeek />
      
      {/* Latest Releases section - based on releaseDate */}
      <LatestReleases />
    </div>
  );
};

export default Home; 