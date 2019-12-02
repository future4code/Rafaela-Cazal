import React from 'react';
import styled from 'styled-components';


const FormularioTres = styled.div`
display: block;
flex-direction: column;
margin: auto;
`
const Paragrafo = styled.p`
margin-top: 10px;
`


class Etapa3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tela: "etapa3",
      };
    }
    render() {
      return (
<FormularioTres>
            <h2> ETAPA 3 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            <Paragrafo> 5. Por que você não terminou um curso de graduação?</Paragrafo>
            <input></input>
            <Paragrafo> 6. Você fez algum curso complementar?</Paragrafo>
            <select>
            <option> Nenhum </option>  
            <option> Curso técnico </option>  
            <option> Curso de inglês </option>  
            <option> Outro curso</option>  
             </select>
 </FormularioTres>
    );
}
}

export default Etapa3;
