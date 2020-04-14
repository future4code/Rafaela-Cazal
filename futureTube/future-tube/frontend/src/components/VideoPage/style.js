import React from 'react';
import styled from 'styled-components';


export const VideoGridContainer = styled.div`
  height: 100%;
  font-family: Roboto, sans-serif;
  width: 85vw;
  margin: 0;
  padding: 1em 1em 0 1em;
  display: grid;
  gap: 1em ;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: fit-content(50%);
  background-color: #fafbfc;
`
const CardContainer = styled.div`
  height: fit-content;
  border: 1px solid grey;
  border-radius: 2px;
  width: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: justify;
  justify-content: justify;
  background-color: #fafbfc;
`

const Thumbnail = styled.img`
  height: 65%;
  width: 100%;
`

const Title = styled.h3`
  margin-left: 1em;
  margin-bottom: 0.5em;
`
const Description = styled.p`
    margin-left: 1em;
    margin-bottom: 0.5em;
    color: grey;
`

const Author = styled.p`
  font-size: 11px;
  margin-left: 2em;
  color: grey;
`

const PostTime = styled.p`
  font-size: 11px;
  color: grey;
  margin-left: 2em;
  margin-top: 0;
`

export function VideoCardPage(props) {
    return (
        <CardContainer>
            <Thumbnail src='https://images.squarespace-cdn.com/content/51814c87e4b0c1fda9c1fc50/1528477126660-BIUZUNYJQ0T1N5P7B4UJ/thumbnail-2.png?format=1500w&content-type=image%2Fpng' alt="AWS Lambda" />
            <Title> Aula 78 - Aws Lambda</Title>
            <Description> Aula sobre Aws Lambda</Description>
            <Author>Tutor: Lbn_Goli</Author>
            <PostTime> há 5 dias </PostTime>
        </CardContainer>
    );

} 