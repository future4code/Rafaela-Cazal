import React from 'react';
import { connect } from 'react-redux';
import TarefaItem from './TarefaItem';

const ListadeTarefas = (props) => {
    return (
        <ul>
            {
                props.todasAsTarefas.map((tarefa) => ( <TarefaItem tarefa={tarefa} /> ))
            }
        </ul>
    )
};

const mapStateToProps = state => ({
    todasAsTarefas: state.tarefas.todasAsTarefas,
});

export default connect(mapStateToProps)(ListadeTarefas)