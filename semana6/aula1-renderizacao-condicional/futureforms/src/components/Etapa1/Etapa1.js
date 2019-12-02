import React from 'react';
import styled from 'styled-components';


const FormularioUm = styled.div`
display: flex;
flex-direction: column;
`

const PrimeiroInput = styled.input`
width: 20px
`

class Etapa1 extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        tela: "etapa1",
      };
    }
  
    onClickProximaEtapa = () => {
      this.setState({ tela: "etapa2" });
    };
  
    render() {
      return (
        <FormularioUm>
          <h1>ETAPA 1 - DADOS GERAIS </h1>
          <label> 1. Qual o seu nome?</label>
          <PrimeiroInput type="text"> </PrimeiroInput>
        </FormularioUm>
      );
    }
  }
  
  export default Etapa1;
  