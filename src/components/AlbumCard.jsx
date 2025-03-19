import React from 'react';
import { Link } from 'react-router-dom';

const AlbumCard = ({ album, artist }) => {
  const releaseDate = new Date(album.releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  // Ensure artistId is treated as a string for the URL
  const artistLink = `/artists/${album.artistId}`;
  
  // Determine what to display for the artist name
  const artistName = artist ? artist.name : 'Loading...';
  
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:shadow-xl transition-shadow duration-300 hover:border-gray-600">
      <div className="bg-gradient-to-br from-gray-700 to-gray-800 h-40 flex items-center justify-center">
        {/* ToDo:  it has to be replaced with an actual image */}
        <div className="text-5xl">{album.albumGroup === 'Album' ? '💿' : '📀'}</div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate text-white" title={album.title}>{album.title}</h3>
        <Link to={artistLink} className="text-purple-400 hover:text-blue-400 transition-colors duration-200 block mb-2">
          {artistName}
        </Link>
        <div className="flex justify-between text-sm text-gray-400">
          <span>{album.genre}</span>
          <span>{releaseDate}</span>
        </div>
        <div className="mt-2 text-xs text-gray-400">
          <span className="inline-block px-2 py-1 bg-gray-700 rounded-full">{album.label}</span>
          <span className="inline-block px-2 py-1 bg-gray-700 rounded-full ml-2">{album.albumGroup}</span>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard; 