const API_URL = 'http://localhost:3001';


// Album-related API calls
export const fetchAlbums = async () => {
  try {
    const response = await fetch(`${API_URL}/albums`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching albums:', error);
    return [];
  }
};

export const fetchAlbumById = async (albumId) => {
  try {
    const response = await fetch(`${API_URL}/albums/${albumId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching album ${albumId}:`, error);
    return null;
  }
};

// Artist-related API calls
export const fetchArtists = async () => {
  try {
    const response = await fetch(`${API_URL}/artists`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching artists:', error);
    return [];
  }
};

export const fetchArtistById = async (artistId) => {
  try {
    console.log("fetchArtistById called with ID:", artistId, "type:", typeof artistId);
    
    // Try to get all artists first
    const artists = await fetchArtists();
    console.log("All artists:", artists);
    
    // Convert artistId to a number for comparison
    const parsedId = Number(artistId);
    console.log("Parsed artist ID:", parsedId);
    
    // Find the artist with the matching ID
    const artist = artists.find(a => Number(a.id) === parsedId);
    
    console.log('Artist found:', artist);
    
    return artist || null;
  } catch (error) {
    console.error(`Error fetching artist ${artistId}:`, error);
    return null;
  }
};

export const fetchAlbumsByArtist = async (artistId) => {
  try {
    console.log("fetchAlbumsByArtist called with ID:", artistId);
    
    // Ensure artistId is treated as a number
    const parsedId = Number(artistId);
    
    const response = await fetch(`${API_URL}/albums?artistId=${parsedId}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log('Albums data for artist:', data);
    return data;
  } catch (error) {
    console.error(`Error fetching albums for artist ${artistId}:`, error);
    return [];
  }
}; 