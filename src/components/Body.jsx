import React,{useEffect} from 'react'
import styled from 'styled-components';
import {AiFillClockCircle} from 'react-icons/ai';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';

export default function Body() {
  const[{token,selectedPlaylistId}, dispatch]=useStateProvider();

  useEffect(() => {
    const getIntialPlaylist = async () => {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${
        (selectedPlaylistId,
        { 
          headers:{
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
      })
    }`
    );
  };
  },[token,dispatch])
  return (
    <Container>
      Body 122
    </Container>
  )
}

const Container = styled.div``;