import { useEffect, useState } from "react";

const CLIENT_ID = "your_client_id";
const REDIRECT_URI = "http://localhost:3000/about";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const API_BASE = "https://api.spotify.com/v1";
const AUTH_SCOPE = "user-read-playback-state";


export default function Spotify() {
    const [token, setToken] = useState(null);
    const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  
    useEffect(() => {
      const storedToken = window.localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
  
      const fetchCurrentlyPlaying = async () => {
        try {
          const response = await fetch(`${API_BASE}/me/player/currently-playing`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (response.status === 401) {
            // Token expired, handle token refresh here
            console.log("Token expired. Refresh token logic goes here.");
          }
  
          const data = await response.json();
  
          console.log("API Response:", data);
  
          if (data && data.item) {
            setCurrentlyPlaying(data);
          } else {
            setCurrentlyPlaying(null);
          }
        } catch (error) {
          console.error("Error fetching currently playing track:", error);
          setCurrentlyPlaying(null);
        }
      };
  
      const interval = setInterval(() => {
        if (token) {
          fetchCurrentlyPlaying();
        }
      }, 10000);
  
      return () => clearInterval(interval);
    }, [token]);
  
    const handleLogin = () => {
      window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${AUTH_SCOPE}`;
    };
  
    return (
      <div>
        {token ? (
          <div>
            {currentlyPlaying ? (
              <div>
                <p>Currently Playing:</p>
                <p>{currentlyPlaying.item.name}</p>
                <p>By: {currentlyPlaying.item.artists[0].name}</p>
              </div>
            ) : (
              <p>No track currently playing</p>
            )}
          </div>
        ) : (
          <button onClick={handleLogin}>Login to Spotify</button>
        )}
      </div>
    );
  }
  
