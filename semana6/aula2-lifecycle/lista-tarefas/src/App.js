import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      tarefas: "",
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Lista de tarefas</h2>
        <input  placeholder={"digite sua tarefa"}> </input>
        <button>Adicionar tarefa</button>
      </div>
    );
  }
}


export default App;
