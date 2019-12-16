import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const BotaoDelete = styled.button`
color: black;
border-radius: 30%;
background-color: #F77F00;
`
const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";

export default class DeletePlaylistItem extends Component {  

   aoClicarDelete = () => {      
      const url = `${baseURL}/playlists/deletePlaylist?playlistId=${this.props.lista.id}`;
      const token = "rafacazal";

      axios.delete(url, {
         headers: {
            auth: token,
         }
      }).then(() => {
         this.props.onClickDelete();
      }).catch(error => {
         alert("playlist nao pode ser apagada")
      })
   };

   render() {
      return (
         <div>
            <li>
               {this.props.lista.name} {" "}
               <BotaoDelete onClick={this.aoClicarDelete}>X</BotaoDelete>
            </li>
         </div>
      )
   };
}