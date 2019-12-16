import React from "react";
import styled from "styled-components";
import axios from "axios";

const BotaoCriar = styled.button`
background-color: #F77F00;
color:black;
margin-left: 5px;
border-radius: 4px;

`
const InputNome = styled.input`
margin-left: 15px;

`
const CriarContainer = styled.div`
font-size: 20px;
border: 1px solid #F4F2EF;
width: 430px;
justify-content:center;
height: 30px;
padding: 10px;
position: fixed;
top: 120px;
left: 28vw;
`

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
        <CriarContainer>
           <label>Nome playlist:</label>
           <InputNome type="text" onChange={this.onPlaylistNameChange} value={this.state.playlistName} placeholder="Nome"/>
           <BotaoCriar onClick={this.createNewPlaylist}>Criar Playlist</BotaoCriar>
        </CriarContainer>
     );
  };
}
