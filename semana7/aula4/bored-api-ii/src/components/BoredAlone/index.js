import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const baseURL = "http://www.boredapi.com/api/activity/";

class BoredAlone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "boredAlone",
      currentAtividade: {}
    };
  }

  componentDidMount() {
    this.getRandomActivity();
  }

  getRandomActivity = async () => {
    // Usando o axios para bater na API do BoredAPI
    // no endpoint que retorna uma atividade aleatória
    const response = await axios.get(baseURL);

    this.setState({ currentAtividade: response.data });
  };

  render() {
    return (
      <div>
        <ul>
          <h2>Atividade: {this.state.currentAtividade.activity}</h2>
          <h2>Categoria: {this.state.currentAtividade.type}</h2>
          <h3>
            Tédio sozinh@ (quantidade de pessoas):{" "}
            {(this.state.currentAtividade.participants = 1)}
          </h3>
        </ul>
      </div>
    );
  }
}

export default BoredAlone;
