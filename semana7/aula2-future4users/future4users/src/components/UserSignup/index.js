import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components';


const FormContainer = styled.form`
  border: 1px solid black;
  padding: 5px;
  text-align: center;
  padding: 3vh 5vh;
  width: fit-content;
  text-align: center;
  margin: 5em auto;
`;

const LabelStyled = styled.label`
margin-left: 10px;
margin-right: 5px;
`
const BotaoSalvar = styled.button`
text-align: center;
color: white;
background-color: blue;
margin-left: 10px;
`

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api";

class UserSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: ""
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handleCreateUser = async () => {
    const userToBeCreated = {
      name: this.state.name,
      email: this.state.email
    };

    const axiosConfig = {
      headers: {
        "api-token": "rafacazal"
      }
    };

    // Fazendo de forma assíncrona
    // axios
    //   .post(`${baseURL}/users/createUser`, userToBeCreated, axiosConfig)
    //   .then(() => {
    //     this.setState({ name: "", email: "" });
    //   });

    // Fazendo de forma síncrona usando await
    await axios.post(
      `${baseURL}/users/createUser`,
      userToBeCreated,
      axiosConfig
    );
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <FormContainer>
        <LabelStyled>Nome:</LabelStyled>
        <input
          onChange={this.handleNameChange}
          placeholder="Nome"
          value={this.state.name}
        />
        <LabelStyled>E-mail:</LabelStyled>
        <input
          onChange={this.handleEmailChange}
          placeholder="E-mail"
          value={this.state.email}
        />
        <BotaoSalvar onClick={this.handleCreateUser}>Salvar</BotaoSalvar>
      </FormContainer>
    );
  }
}

export default UserSignup;
