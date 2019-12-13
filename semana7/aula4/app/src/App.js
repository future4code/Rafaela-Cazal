import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import BoredGroup from "./components/BoredGroup";
import BoredAlone from "./components/BoredAlone/index";

const BotaoPrincipal = styled.button`
  text-align: center;
  display: flex;
  justify-content: center;
  height: 4vw;
  widht: 5vw;
  color: white;
  paddin: 10px;
  margin-left: 30px;
  margin-top:20px;
  background-color: #202d63;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "inicial"
    };
  }

  handleChangePage = () => {
    if (this.state.currentPage === "boredAlone") {
      this.setState({ currentPage: "boredGroup" });
    } else {
      this.setState({ currentPage: "boredAlone" });
    }
  };

  render() {
    const buttonText =
      this.state.currentPage === "boredAlone"
        ? "Sortear atividade em grupo"
        : "Sortear atividade para uma pessoa";

    return (
      <div className="App">
        <BotaoPrincipal onClick={this.handleChangePage}>
          {buttonText}
        </BotaoPrincipal>
        <div>
          {this.state.currentPage === "boredAlone" ? (
            <BoredAlone />
          ) : (
            <BoredGroup />
          )}
        </div>
      </div>
    );
  }
}
