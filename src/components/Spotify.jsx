import React from 'react'
import styled from 'styled-components';
import Sidebar from './Sidebar';


export default function Spotify() {
  return (
    <Container>
      <div className="spotify__body">
        <Sidebar />
        <div className="body">
            <div className="body__contents">

            </div>
        </div>
      </div>
      <div className="spotify__footer">

      </div>
    </Container>
  )
}

const Container = styled.div``;