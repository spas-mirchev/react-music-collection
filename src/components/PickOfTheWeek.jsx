import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAlbums, fetchArtists } from '../services/api';

const PickOfTheWeek = () => {
  const [topAlbum, setTopAlbum] = useState(null);
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopAlbum = async () => {
      try {
        const albumsData = await fetchAlbums();
        // Sort by popularity (highest first)
        const sortedByPopularity = [...albumsData].sort((a, b) => b.popularity - a.popularity);
        
        // Get the top album
        const mostPopular = sortedByPopularity[0];
        setTopAlbum(mostPopular);
        
        // Get artist data
        const artistsData = await fetchArtists();
        const albumArtist = artistsData.find(artist => Number(artist.id) === Number(mostPopular.artistId));
        setArtist(albumArtist);
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load top album data');
        setLoading(false);
      }
    };

    fetchTopAlbum();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading pick of the week...</div>;
  }

  if (error || !topAlbum) {
    return <div className="text-center p-4 text-red-500">{error || 'No album data available'}</div>;
  }

  // Format release date
  const releaseDate = new Date(topAlbum.releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="mb-12 relative">
      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-6">Pick of the Week</h2>
      
      <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-lg overflow-hidden shadow-xl">
        {/* Pick of the Week Label */}
        <div className="absolute -top-4 left-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-6 rounded-l-full font-bold shadow-lg transform rotate-2">
          PICK OF THE WEEK
        </div>
        
        <div className="md:flex">
          {/* Album cover placeholder (left side) */}
          <div className="md:w-1/3 bg-gradient-to-br from-purple-800/50 to-blue-800/50 flex items-center justify-center p-8">
            <div className="text-8xl">{topAlbum.albumGroup === 'Album' ? '💿' : '📀'}</div>
          </div>
          
          {/* Album details (right side) */}
          <div className="md:w-2/3 p-6">
            <div className="flex items-center mb-4">
              <span className="bg-purple-600/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                #{1} Most Popular
              </span>
              <span className="bg-blue-600/70 text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">
                {topAlbum.genre}
              </span>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-2">{topAlbum.title}</h3>
            
            <Link to={`/artists/${topAlbum.artistId}`} className="text-xl text-blue-400 hover:text-purple-400 transition-colors duration-200 block mb-3">
              {artist ? artist.name : 'Unknown Artist'}
            </Link>
            
            <div className="text-gray-300 mb-6">
              <p><span className="text-gray-400">Label:</span> {topAlbum.label}</p>
              <p><span className="text-gray-400">Release Date:</span> {releaseDate}</p>
              <p><span className="text-gray-400">Popularity Score:</span> {topAlbum.popularity}</p>
            </div>
            
            <div className="mt-4">
              <span className="inline-block px-3 py-1 bg-gray-400 rounded-full">
                {topAlbum.albumGroup}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickOfTheWeek; 