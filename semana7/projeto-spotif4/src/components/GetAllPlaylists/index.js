import React  from "react";
import styled from "styled-components";
import axios from "axios";
import DeletePlaylistItem from '../DeletePlaylistItem';

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";
const token = "rafacazal"

const PlaylistContainer = styled.div`
margin-top:45px;
padding: 4px;
margin-bottom: 20px;
margin-left: 30px;
`
const H2Playlist = styled.h2`
margin-bottom: 10px;

`

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
         <PlaylistContainer>
            <H2Playlist>Playlists Criadas</H2Playlist>
            {this.state.playlists.map(name => (<DeletePlaylistItem lista={name} onClickDelete={this.getAllPlaylist}/>
            ))}
         </PlaylistContainer>
      );
   }
}