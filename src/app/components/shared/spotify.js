import React, { useEffect, useState } from "react";

const Spotify = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [fetchingToken, setFetchingToken] = useState(false);

  // Ensure that your environment variables are correctly set
  const client_id = "2fd6cb51b0ee4bfd9597ffa96af14c3b";
  const client_secret = "6e790b0f11ff48e59d607ed1385b84a0";
  const NOW_PLAYING_ENDPOINT =
    "https://api.spotify.com/v1/me/player/currently-playing";
  const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

  const getAccessToken = async (code) => {
    setFetchingToken(true);

    const formData = new URLSearchParams();
    formData.append("code", code);
    formData.append("redirect_uri", "http://localhost:3000/about");
    formData.append("grant_type", "authorization_code");

    const authOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`,
      },
      body: formData.toString(),
    };

    try {
      const response = await fetch(TOKEN_ENDPOINT, authOptions);
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("spotify_access_token", data.access_token);
        setAccessToken(data.access_token);
      } else {
        console.error("Error refreshing/accessing token:", data.error);
      }
    } catch (error) {
      console.error("Error getting access token:", error);
    } finally {
      setFetchingToken(false);
    }
  };

  const fetchNowPlaying = async () => {
    try {
      if (!accessToken) return;

      const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setNowPlaying(data);
      } else {
        console.error(
          "Error fetching now playing:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching now playing:", error);
    }
  };

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const code = currentUrl.searchParams.get("code");

    if (code && !accessToken) {
      getAccessToken(code);
    } else {
      const storedToken = localStorage.getItem("spotify_access_token");
      if (storedToken) {
        setAccessToken(storedToken);
      } else if (!code) {
        window.location.href = `https://accounts.spotify.com/authorize?response_type=code&redirect_uri=http://localhost:3000/about&scope=user-read-currently-playing&client_id=${client_id}`;
      }
    }

    const fetchData = async () => {
      await fetchNowPlaying();
      const interval = setInterval(fetchNowPlaying, 6000);
      return () => clearInterval(interval);
    };

    fetchData();
  }, [accessToken]);

  return (
    <div>
      {nowPlaying && nowPlaying.item ? (
        <div className="flex items-center gap-[2rem] text-standard-beige lg:max-w-[20rem] w-full max-w-[80%] mx-auto h-[80px] bg-standard-spotify rounded-none">
          <div>
            <img
              className="music-img h-[60px] ml-2 rounded-[10rem]"
              src={nowPlaying.item.album.images[0].url}
              alt="Album Art"
            />
          </div>
          <div>
            <p className="text-[14px]">{nowPlaying.item.artists[0].name}</p>
            <a
              href={`https://open.spotify.com/track/${nowPlaying.item.id}`}
              target="_blank"
              rel="noreferrer"
            >
              {nowPlaying.item.name.length > 10
                ? `${nowPlaying.item.name.substring(0, 20)}...`
                : nowPlaying.item.name}
            </a>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Spotify;
