import React from 'react'
import styled from 'styled-components'
import {IoLibrary} from 'react-icons/io5';
import {mdHomeFilled, MdSearch} from 'react-icons/md';

export default function Sidebar() {
  return (
    <Container>
      <div className="top__links">
        <div className="logo">
           <img src='https://i.ibb.co/Bg8P8wQ/Spotify-Logo-White.png' 
           alt='spotify'/>
        </div>
        <ul>
            <li>
                <mdHomeFilled />
                <span>Home</span>
            </li>

            <li>
                <MdSearch/>
                <span>Search</span>
            </li>
            <li>
                <IoLibrary/>
                <span>Your Library</span>
            </li>
        </ul>
      </div>
    </Container>
  )
}

const Container = styled.div`
    background-color: black;
    color: #b3b3b3;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .top__links{
        display: flex;
        flex-direction: column;
        .logo{
            
        }
    }
`;