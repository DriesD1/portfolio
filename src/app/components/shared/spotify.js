import React, { useEffect, useState } from "react";

const Spotify = () => {
  const [nowPlaying, setNowPlaying] = useState(null);

  const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

  const basic = btoa(`${client_id}:${client_secret}`);
  const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
  const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

  const getAccessToken = async () => {
    try {
      const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${basic}`,
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
        }),
      });
  
      const data = await response.json();
      console.log('Token Response:', data);
  
      if (response.ok) {
        return data.access_token;
      } else {
        console.error('Error getting access token:', data.error);
        throw new Error('Error getting access token');
      }
    } catch (error) {
      console.error('Error getting access token:', error);
      throw error;
    }
  };
  
  const fetchNowPlaying = async () => {
    try {
      const access_token = await getAccessToken();
      const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const data = await response.json();
      console.log('Now Playing Data:', data);
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
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Spotify;
