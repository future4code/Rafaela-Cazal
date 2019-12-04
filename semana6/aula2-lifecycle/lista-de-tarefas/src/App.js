import React from "react";
import "./App.css";
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 500px;
  margin-left: 400px
`
const ListaContainer = styled.div`
margin-top: 10px;
`
const InputTarefa = styled.input`
margin-right: 10px;
`

const ContainerDaNovaTarefa = styled.section`
margin-top: 10px;
`


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valorTarefa: '',
      arrayTarefas: [],
    }
  }

  onChangeTarefa = (e) => {
    this.setState({ valorTarefa: e.target.value })
    console.log(this.state.valorTarefa)
  }

  aoClicarAdicionar = (props) => {
    if(this.state.valorTarefa !== ""){
      const arrayTarefasCopy = [...this.state.arrayTarefas, props]
      this.setState({
        arrayTarefas: arrayTarefasCopy,
        valorTarefa: '',
      });
    } else {
      alert("Tarefa não deve ficar vazia")
    }
  }


  render() {
    return (
      <MainContainer>
        <h1>Lista de Tarefas</h1>
        <ListaContainer> 
          <InputTarefa type='text' value={this.state.valorTarefa} onChange={this.onChangeTarefa} placeholder='Inserir tarefa'/>
          <button onClick={this.aoClicarAdicionar}>Adicionar</button> 
          </ListaContainer> 
          <ContainerDaNovaTarefa>
          {this.state.arrayTarefas.map((props) => 
          <li><strong>{this.props.valorTarefa}</strong></li>)}
        </ContainerDaNovaTarefa>
    </MainContainer>
    );
  }
}

export default App;