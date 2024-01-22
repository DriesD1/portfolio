import { useEffect, useState } from "react";

const Spotify = () => {
  const [nowPlaying, setNowPlaying] = useState(null);

  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const basic = btoa(`${client_id}:${client_secret}`);
  const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
  const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

  const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: decodeURIComponent(process.env.SPOTIFY_REFRESH_TOKEN), // Decode the refresh token
      }),
    });
  
    return response.json();
  };
  

  const fetchNowPlaying = async () => {
    try {
      const { access_token } = await getAccessToken();
      const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const data = await response.json();
      console.log('Now Playing Data:', data); // Log the data received from the API
      setNowPlaying(data);
    } catch (error) {
      console.error('Error fetching now playing:', error);
    }
  };
  

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(() => {
      fetchNowPlaying();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Now Playing</h2>
      {nowPlaying && nowPlaying.item ? (
  <div>
    <p>{nowPlaying.item.name}</p>
    <p>By: {nowPlaying.item.artists[0].name}</p>
  </div>
) : (
  <p>No track currently playing</p>
)}

    </div>
  );
};

export default Spotify;
