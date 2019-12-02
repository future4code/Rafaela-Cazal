import React from 'react';
import './App.css';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1/Etapa1'

const Container = styled.div`
display: flex;
flex-direction: column;
`
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tela: "inicial",
    };
  }

  onClickLogin = () => {
    this.setState({ tela: "etapa1" });
  };

  render() {
    return (
      <Container>
        <h1>FutureForms</h1>
        <FormularioUm/>
      </Container>
    );
  }
}


export default App;
