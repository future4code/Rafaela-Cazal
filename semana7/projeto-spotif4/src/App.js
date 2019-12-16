import React, { Component } from "react";
import axios from "axios";
import './App.css';
import styled from "styled-components";
import GetAllPlaylists from "./components/GetAllPlaylists";
import CreatePlaylists from "./components/CreatePlaylists";

const TituloPrincipal = styled.h1`
text-align: center;
color: #F77F00;
margin-top: 40px;
font-size:35px;
`
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <TituloPrincipal>Spotif4</TituloPrincipal>
      <GetAllPlaylists/>
      <CreatePlaylists/>
      </div>
    );
  }
}
