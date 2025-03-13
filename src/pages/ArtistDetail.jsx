import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchArtistById, fetchAlbumsByArtist } from '../services/api';
import AlbumCard from '../components/AlbumCard';

const ArtistDetail = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log("Artist ID from URL params:", id);
        
        // First attempt to get the artist
        const artistData = await fetchArtistById(id);
        console.log("Artist data received:", artistData);
        
        if (!artistData) {
          throw new Error(`Artist with ID ${id} not found`);
        }
        
        setArtist(artistData);
        
        // Now get their albums
        const albumsData = await fetchAlbumsByArtist(id);
        console.log("Albums data received:", albumsData, "count:", albumsData.length);
        
        // Sort albums by release date (newest first)
        const sortedAlbums = albumsData.sort((a, b) => 
          new Date(b.releaseDate) - new Date(a.releaseDate)
        );
        setAlbums(sortedAlbums);
        
        setLoading(false);
      } catch (err) {
        console.error("Error loading artist:", err);
        setError(err.message || 'Failed to load artist data');
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  // Show a more detailed loading state
  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
          </div>
          <p className="mt-4">Loading artist information...</p>
        </div>
      </div>
    );
  }

  // Show a more helpful error message
  if (error || !artist) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center p-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> {error || 'Artist not found'}</span>
          </div>
          <div className="mt-4">
            <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">{artist.name}</h1>
            {artist.instagram && (
              <a 
                href={`https://instagram.com/${artist.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-1 inline-block"
              >
                @{artist.instagram}
              </a>
            )}
          </div>
          <Link 
            to="/" 
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Albums by {artist.name}</h2>
        
        {albums.length === 0 ? (
          <p className="text-gray-500">No albums found for this artist.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {albums.map((album) => (
              <AlbumCard 
                key={album.id} 
                album={album} 
                artist={artist} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistDetail; 