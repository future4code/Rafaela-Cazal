import React, { Component } from 'react';
import { connect } from 'react-redux';
import { criarTarefa } from '../../actions/tarefa';

class FormularioTarefa extends Component{
    constructor(props){
        super(props);
        this.state = {
            novaTarefaTexto: '',
        }
    }

    
    lidaComMudancaTarefa = (event) => { 
        this.setState({ novaTarefaTexto: event.target.value });
        }

    lidaComEnter = (event) => {
        if( event.key === "Enter"){
            this.lidaComCriarTarefa();
        }
    }

    //  funcao que cria tarefa
    lidaComCriarTarefa = () => {
        const novaTarefa = {
            id: new Date().getTime(),
            texto: this.state.novaTarefaTexto,
            completa: false,
        }
        // chama via props a action de criar tarefa conforme o modelo da const novaTarefa
        this.props.criarTarefa(novaTarefa);
        this.setState({ novaTarefaTexto: ''})
    }

    render(){

        return (
            <input 
                type="text" 
                value={this.state.novaTarefaTexto} 
                onChange={this.lidaComMudancaTarefa}
                onKeyPress={this.lidaComEnter}
                placeholder="tarefas aqui"
            />
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    criarTarefa: (tarefa) => dispatch(criarTarefa(tarefa))
})


export default connect(null, mapDispatchToProps)(FormularioTarefa);