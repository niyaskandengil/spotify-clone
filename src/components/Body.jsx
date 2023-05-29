import React,{useEffect} from 'react'
import styled from 'styled-components';
import {AiFillClockCircle} from 'react-icons/ai';
import { useStateProvider } from '../utils/StateProvider';

export default function Body() {
  const[{token,selectedPlaylistId},dispatch]=useStateProvider();

  useEffect(() => {
    const getIntialPlaylist = async () => {

    }
  },[token,dispatch])
  return (
    <Container>
      Body 122
    </Container>
  )
}

const Container = styled.div``;