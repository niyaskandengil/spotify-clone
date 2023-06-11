import React, { useEffect } from "react";
import styled from "styled-components";
import { AiFillClockCircle } from "react-icons/ai";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";

export default function Body() {
  const [{ token, selectedPlaylistId }, dispatch] = useStateProvider();

  useEffect(() => {
    const getIntialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        describtion: response.data.description.startsWith("<a") 
           ? "" : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({track}) => ({
          id: track.id,
          name: track.name,
          artist: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        
        })),
       };
      
    };
    getIntialPlaylist();
  }, [token, dispatch]);
  return <Container>Body 122</Container>;
}

const Container = styled.div``;
