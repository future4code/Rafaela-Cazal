import React from 'react';
import './App.css';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1/Etapa1';
import Etapa2 from './components/Etapa2/Etapa2';
import Etapa3 from './components/Etapa3/Etapa3';

const BotaoProximo = styled.button`
margin-top: 20px
width: 100px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tela: "inicial"
    };
  }

  onClickPagina2 = () => {
    this.setState({ tela: "etapa2" });
  };

  onClickPagina3 = () => {
    this.setState({ tela: "etapa3" });
  };
  
    onClickPaginaFinal = () => {
      this.setState({ tela: "final" });
    };

    onClickBack = () => {
      this.setState({ tela: "inicial" });
    };

    render() {
      let tela;
      switch (this.state.tela) {
        case "inicial":
          tela = (
            <div>
 <Etapa1/>
          <BotaoProximo onClick={this.onClickPagina2}>Próxima Etapa</BotaoProximo>
          </div>
        );
        break;
      case "etapa2":
        tela = (
          <div> 
          <Etapa2/>
          <BotaoProximo onClick={this.onClickPagina3}>Próxima Etapa</BotaoProximo>
          </div>
        );
        break;
      case "etapa3":
        tela = (
      <div>
          <Etapa3/>
            <BotaoProximo onClick={this.onClickPaginaFinal}>Próxima Etapa </BotaoProximo>
      </div>
         );
         break;
       case "final":
         tela = (
           <div>
             <h2> O FORMULÁRIO ACABOU!</h2>
             <p> Muito obrigado por participar! Entraremos em contato!</p>
             <BotaoProximo onClick={this.onClickBack}>Voltar para o início</BotaoProximo>
           </div>
           );
           break;
         default:
            case "inicial":
                tela = (
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
                <BotaoProximo onClick={this.onClickNext}>Próxima Etapa</BotaoProximo>
            </div> 
                 )}
      return (
        <div className="App">
          <h1>FutureForms</h1>
          {tela}
        </div>
      );
    }
  }

export default App;


