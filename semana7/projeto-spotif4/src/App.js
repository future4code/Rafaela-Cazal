import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import GetAllPlaylists from "./components/GetAllPlaylists";
import CreatePlaylists from "./components/CreatePlaylists";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="App">
      <GetAllPlaylists/>
      <CreatePlaylists/>
      </div>
    );
  }
}
