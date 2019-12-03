import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      valorDaTarefa: "",
      filtro: ""
    }
  }

  valorTarefa = (e) => {
    this.setState({ valorDaTarefa: e.target.value })
  }

  criarNovaTarefa = () => {
    const tarefa = {
      inputDaTarefa : this.state.valorDaTarefa,
    }

render() {
  return (
    <div>
      <h1> Lista de tarefas</h1>
 <input value={this.state.valorDaTarefa} onChange={this.valorTarefa}></input>
 <button onClick={criarNovaTarefa(tarefa)} >Adicionar</button>
    </div>
  );
}
}

export default App;
