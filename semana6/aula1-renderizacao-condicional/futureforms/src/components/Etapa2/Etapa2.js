import React from 'react';
import styled from 'styled-components';


const FormularioDois = styled.div`
display: block;
flex-direction: column;
margin: auto;
`
const Paragrafo = styled.p`
margin-top: 10px;
`


class Etapa2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tela: "etapa2",
      };
    }  

    render() {
      return (
        <FormularioDois>
          <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
          <Paragrafo>5. Qual curso?</Paragrafo>
          <input></input>
          <Paragrafo>6. Qual a unidade de ensino?</Paragrafo>
          <input></input>
      </FormularioDois> 
      );
    }
  }
  
  export default Etapa2;
  