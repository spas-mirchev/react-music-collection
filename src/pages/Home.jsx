import React from 'react';
import AlbumGrid from '../components/AlbumGrid';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Music Collection</h1>
      <p className="mb-8">Explore our collection of albums from various artists.</p>
      
      <AlbumGrid />
    </div>
  );
};

export default Home; 