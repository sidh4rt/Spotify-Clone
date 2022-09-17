import React from 'react';
import styled from 'styled-components';
export default function Login() {
  const handleClick = () => {
    const clientId = "8d9d70ec27944c2cac9b2a7c6d24ecef";
    const redirectURL = "http://localhost:3000/";
    const apiURL = "https://accounts.spotify.com/authorize";
    const scope = [
    "user-read-email", 
    "user-read-private", 
    "user-modify-playback-state",
    "user-read-playback-state", 
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-position",
    "user-top-read"
    ];
    window.location.href = `${apiURL}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scope.join(
    " "
    )} &response_type=token&show_dialog=true` ;
  };
  return <Container>
    <img
      src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
      alt="spotify-logo"
    />
    <button onClick={handleClick}>CONNECT SPOTIFY</button>
  </Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1E2022;
  gap: 5rem;
  img {
    height: 20vh; 
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: white;
    color: black;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
  }
  button:hover {
    transform: scale(1.05) perspective(1px)
  }
`;