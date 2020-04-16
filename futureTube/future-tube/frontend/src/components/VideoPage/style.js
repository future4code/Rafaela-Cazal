import React from 'react';
import styled from 'styled-components';


export const VideoGridContainer = styled.div`
  font-family: Roboto, sans-serif;
  width: 100%;
  margin-top: 13vh;
  padding: 1vh 1vh 1vh 1vh;
  display: grid;
  gap: 1.5vw ;
  grid-template-columns: 20% 20% 20% 20%;
`
const CardContainer = styled.div`
  height: fit-content;
  border: 1px solid grey;
  border-radius: 2px;
  width: 18vw;
  padding: 1vh;
  display: flex;
  flex-direction: column;
  align-items: justify;
  justify-content: justify;
  background-color: #fafbfc;
  margin-left: 80px;
`

const Thumbnail = styled.img`
  height: 65%;
  width: 100%;
`

const Title = styled.h3`
 
`
const Description = styled.p`
    color: grey;
`

const Author = styled.p`
  font-size: 11px;
  color: grey;
`

const PostTime = styled.p`
  font-size: 11px;
  color: grey;
  margin-top: 0;
`

export function VideoCardPage(props) {
    return (
      <>
        <CardContainer>
            <Thumbnail src='https://images.squarespace-cdn.com/content/51814c87e4b0c1fda9c1fc50/1528477126660-BIUZUNYJQ0T1N5P7B4UJ/thumbnail-2.png?format=1500w&content-type=image%2Fpng' alt="AWS Lambda" />
            <Title> Aula 78 - Aws Lambda</Title>
            <Description> Aula sobre Aws Lambda</Description>
            <Author>Tutor: Lbn_Goli</Author>
            <PostTime> há 5 dias </PostTime>
        </CardContainer>
       </>
    );

} 