import React from 'react';
import { connect } from 'react-redux';
import { marcarTarefaComoCompleta, apagarTarefa } from '../../actions/tarefa';
import styled from 'styled-components';

const RemoveButton = styled.span`
color: red;
font-weight: bold;  
cursor: pointer;
`

const TarefaItem = (props) => {

    
    const lidaComCompletar = () => {
    props.marcarTarefaComoCompleta(props.tarefa.id)
    }

    const lidarComApagar = () => {
        props.apagarTarefa(props.tarefa.id)
    }

    return(
        <li>
        <input 
        type="checkbox" 
        checked={props.tarefa.completa}
        onChange={lidaComCompletar}
        /> 
        { props.tarefa.texto} -<RemoveButton onClick={lidarComApagar}> X </RemoveButton>
        </li>
    )
}
const mapDispatchToProps = (dispatch) => ({
    marcarTarefaComoCompleta: (tarefaId) => dispatch(marcarTarefaComoCompleta(tarefaId)),
    apagarTarefa: (tarefaId) => dispatch(apagarTarefa(tarefaId))

})

export default connect(null, mapDispatchToProps)(TarefaItem);