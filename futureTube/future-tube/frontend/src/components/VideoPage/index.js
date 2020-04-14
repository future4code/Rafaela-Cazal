import React, { useState }  from 'react';
import { useDispatch } from "react-redux";
import { VideoGridContainer } from './style';
import { VideoCardPage } from './style';


export function VideoPage() {
  return(
    <>
        <VideoGridContainer>
          <VideoCardPage/>
          <VideoCardPage/>
          <VideoCardPage/>
          <VideoCardPage/>
        </VideoGridContainer>
    </>
  );
} 