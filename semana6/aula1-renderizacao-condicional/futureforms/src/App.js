import React from 'react';
import './App.css';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tela: "inicial",
      mensagens: 0
    };
  }
    onClickNext = () => {
      this.setState({ tela: "etapa2" });
    };
    onClickNext2 = () => {
      this.setState({ tela: "inicial" });
    };

    render() {
      const tela =
        this.state.tela === "inicial" ? (
          <div>
          <h2>ETAPA 1 - DADOS GERAIS</h2>
          <p>1. Qual o seu nome?</p>
          <input></input>
          <p>2. Qual sua idade?</p>
          <input></input> 
          <p>3. Qual seu email?</p>
          <input></input> 
          <p> 4. Qual a sua escolaridade?</p>
          <select>
            <option> Ensino médio incompleto </option>
            <option> Ensino médio completo </option>
            <option> Ensino superior incompleto </option>
            <option> Ensino superior completo </option>
          </select>
          <button onClick={this.onClickNext}>Próxima Etapa</button>
        </div> 
        ): (
          <div> 
            <h2> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            <p> 5. Qual curso?</p>
            <input></input>
            <p> 6. Qual a unidade de ensino?</p>
            <input></input>
            <button onClick={this.onClickNext2}>Próxima Etapa </button>
          </div>  
        );

      return (
        <div className="App">
          <h1>FutureForms</h1>
          {tela}
        </div>
      );
    }
  }

export default App;


