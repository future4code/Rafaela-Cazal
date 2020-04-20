import React, { useState}  from 'react';
import { useDispatch } from "react-redux";
import { VideoCardPage, VideoGridContainer } from './style';
import {Header} from '../Header';
import logo from '../../assets/BlackLogo.png'
import { FaBars} from 'react-icons/fa';


export function Feed() {
  return(
    <>  
    <Header>
    <img src={logo} width="200px" />
    <FaBars size={22} />
    </Header>

        <VideoGridContainer>
          <VideoCardPage/>
          <VideoCardPage/>
          <VideoCardPage/>
          <VideoCardPage/>
        </VideoGridContainer>
    </>
  );
} 