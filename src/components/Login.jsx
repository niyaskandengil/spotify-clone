import React from 'react'
import styled from 'styled-components';

export default function Login() {
  const handleClick = () => {
    const client_id = 'b7059438159748cbb7277745d5135a7c'; 
  
  }
  return (
    <Container>
      <img src='https://i.ibb.co/gtfJvBy/Spotify-Logo-Black.png' alt='spotify'/>
      <button onClick={handleClick}>Connect with Spotify</button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:100vh;
  width:100vw;
  background-color: #1db954;
  gap: 5rem;
  img{
    height: 20vh;
  }
  button{
      padding: 1rem 5rem;
      border-radius: 5rem;
      border: none;
      background-color: #191414;
      color: #49f585;
      font-size: 1.3rem;
      cursor: pointer;
    }
    `;
