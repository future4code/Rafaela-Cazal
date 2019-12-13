import React from "react";
import axios from "axios";
import UserListItem from "../UserListItem";

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: []
    };
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = async () => {
    const axiosConfig = {
      headers: {
        "api-token": "rafacazal"
      }
    };

    // Forma assíncrona de fazer usando then
    // const getAllUsersRequest = axios.get(
    //   `${baseURL}/users/getAllUsers`,
    //   axiosConfig
    // );

    // getAllUsersRequest.then(response => {
    //   this.setState({ allUsers: response.data.result });
    // });


    // Forma síncrona de fazer usando await
    const response = await axios.get(
      `${baseURL}/users/getAllUsers`,
      axiosConfig
    );

    this.setState({ allUsers: response.data.result });
  };

  render() {
    return (
      <div>
        <h3>Usuários Cadastrados</h3>
        {this.state.allUsers.map(user => (
          <UserListItem user={user} onDeleteUser={this.getAllUsers} />
        ))}
      </div>
    );
  }
}

export default UsersList;
