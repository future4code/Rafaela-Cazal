import React  from "react";
import styled from "styled-components";
import axios from "axios";
import DeletePlaylistItem from '../DeletePlaylistItem';

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";
const token = "rafacazal"

export default class GetAllPlaylists extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         playlists: [],
      }
   }

   componentDidMount() {
      this.getAllPlaylist();
   }

   getAllPlaylist = () => {
      const url = `${baseURL}/playlists/getAllPlaylists`;
      const token = "rafacazal";

      const request = axios.get(url, {
         headers: {
            auth: token,
         }
      });

      request.then((response) => {
         this.setState({ playlists: response.data.result.list })
      });
   }

   componentDidUpdate() {
      this.getAllPlaylist();
   }

   render() {
      return (
         <div>
            <h3>Playlists Criadas</h3>
            {this.state.playlists.map(name => (<DeletePlaylistItem lista={name} onClickDelete={this.getAllPlaylist}/>
            ))}
         </div>
      );
   }
}