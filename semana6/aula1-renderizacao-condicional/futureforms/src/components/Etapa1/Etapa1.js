import React from 'react';
import styled from 'styled-components';

const Paragrafo = styled.p`
margin-top: 10px;
`

class Etapa1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tela: "etapa1",
      };
    }
    render() {
      return (
        <div>
          <h2>ETAPA 1 - DADOS GERAIS</h2>
          <Paragrafo>1. Qual o seu nome?</Paragrafo>
          <input></input>
          <Paragrafo>2. Qual sua idade?</Paragrafo>
          <input></input> 
          <Paragrafo>3. Qual seu email?</Paragrafo>
          <input></input> 
          <Paragrafo> 4. Qual a sua escolaridade?</Paragrafo>
          <select>
            <option> Ensino médio incompleto </option>
            <option> Ensino médio completo </option>
            <option> Ensino superior incompleto </option>
            <option> Ensino superior completo </option>
          </select>
      </div> 
         );
    }
  }
  
  export default Etapa1;
  