import React from 'react';
import styled from 'styled-components';
import LoadingGif from '../../assets/loading.gif';


const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  align-content: center;
  background-color: #ededed opacity 0.4;
`
const Loader = styled.img`
  width: 18vw;
  height: 10vh; 
  margin: 0 auto;
  height: auto;
  @media (max-width: 380px) {
    width: 90vw;
    margin-left: 3vw;
  }
`

export const LoadingPageStyle = () => (
  <LoaderWrapper>
    <Loader alt="Loader" src={LoadingGif}/>
  </LoaderWrapper>
)