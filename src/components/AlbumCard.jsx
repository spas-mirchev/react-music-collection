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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-200 h-40 flex items-center justify-center">
        {/* Album cover placeholder - you could replace this with an actual image */}
        <div className="text-4xl text-gray-500">{album.albumGroup === 'Album' ? '💿' : '📀'}</div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate" title={album.title}>{album.title}</h3>
        <Link to={artistLink} className="text-blue-600 hover:underline block mb-2">
          {artistName}
        </Link>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{album.genre}</span>
          <span>{releaseDate}</span>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          <span className="inline-block px-2 py-1 bg-gray-100 rounded-full">{album.label}</span>
          <span className="inline-block px-2 py-1 bg-gray-100 rounded-full ml-2">{album.albumGroup}</span>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard; 