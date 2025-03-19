import React, { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';
import { fetchAlbums, fetchArtists } from '../services/api';

const LatestReleases = () => {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const albumsData = await fetchAlbums();
        // Sort albums by release date (newest first)
        const sortedAlbums = albumsData.sort((a, b) => 
          new Date(b.releaseDate) - new Date(a.releaseDate)
        );
        // Get only the 4 most recent releases
        const latestFour = sortedAlbums.slice(0, 4);
        setAlbums(latestFour);
        
        const artistsData = await fetchArtists();
        setArtists(artistsData);
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load album data');
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Find artist by ID
  const findArtist = (artistId) => {
    // Convert both IDs to numbers for comparison
    return artists.find(artist => Number(artist.id) === Number(artistId));
  };

  if (loading) {
    return <div className="text-center p-8">Loading latest releases...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Latest Releases</h2>
      
      {albums.length === 0 ? (
        <p className="text-gray-500">No albums available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {albums.map((album) => (
            <AlbumCard 
              key={album.id} 
              album={album} 
              artist={findArtist(album.artistId)} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestReleases; 