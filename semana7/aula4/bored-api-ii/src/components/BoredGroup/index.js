import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const baseURL = "http://www.boredapi.com/api/activity/";

class BoredGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "boredGroup",
      currentAtividade: {}
    };
  }

  componentDidMount() {
    this.getRandomAtividade();
  }

  getRandomAtividade = async () => {
    // Usando o axios para bater na API do BoredAPI
    // no endpoint que retorna uma atividade aleatória
    const response = await axios.get(baseURL);

    this.setState({ currentAtividade: response.data });
  };

  render() {
    return (
      <div>
        <ul>
          <h1>Atividade: {this.state.currentAtividade.activity}</h1>
          <h2>Categoria: {this.state.currentAtividade.type}</h2>
          <h3>
            Tédio em grupo (quantidade de pessoas):{" "}
            {(this.state.currentAtividade.participants = 4)}
          </h3>
        </ul>
      </div>
    );
  }
}

export default BoredGroup;
