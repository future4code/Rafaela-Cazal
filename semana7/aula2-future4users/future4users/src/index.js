import React from "react";
import ReactDOM from "react-dom";
import UserSignup from "./components/UserSignup";
import UsersList from "./components/UsersList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "signup" // Parte do estado que controla a tela atual
    };
  }

  handleChangePage = () => {
    // Checa se a página atual é a "signup"
    // caso seja, manda o usuário para a lista
    // e vice-versa
    if (this.state.currentPage === "signup") {
      this.setState({ currentPage: "list" });
    } else {
      this.setState({ currentPage: "signup" });
    }
  };

  render() {
    // Define o texto do botão baseado na
    // página em que nos encontramos no momento
    const buttonText =
      this.state.currentPage === "signup"
        ? "Ir para Lista"
        : "Ir para Cadastro";

    return (
      <div className="App">
        <button onClick={this.handleChangePage}>{buttonText}</button>
        {/* Aqui embaixo, checamos a página atual, e renderizamos o componente */}
        {this.state.currentPage === "signup" ? <UserSignup /> : <UsersList />}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
