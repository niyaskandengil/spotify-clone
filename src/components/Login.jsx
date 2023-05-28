import React from 'react'
import styled from 'styled-components';

export default function Login() {
  return (
    <Container>
      <img src='https://i.ibb.co/gtfJvBy/Spotify-Logo-Black.png' alt='spotify'/>
      <button>Connect with Spotify</button>
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
    button{
      padding: 1rem 5rem;
      border-radius: 99px;
        
    `;
