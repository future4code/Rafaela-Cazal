import React from "react";
import styled from "styled-components";
import axios from "axios";

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";
const token = "rafacazal";


export default class CreatePlaylists extends React.Component {
  constructor(props) {
     super(props);
     this.state = { 
        playlistName: "",
     };
  };

  createNewPlaylist = () => {
     const url = `${baseURL}/playlists/createPlaylist`
     const data = {
        name: this.state.playlistName,
     }

     axios.post(url, data, {
        headers: {
           auth: token,
         }
     });

     this.setState({ playlistName: ""});         
  }


  onPlaylistNameChange = event => {
     this.setState({playlistName: event.target.value});
  };

  render() {
     return(
        <div>
           <label>Nome playlist:</label>
           <input type="text" onChange={this.onPlaylistNameChange} value={this.state.playlistName} placeholder="Nome"/>

           <button onClick={this.createNewPlaylist}>Criar Playlist</button>
        </div>
     );
  };
}
