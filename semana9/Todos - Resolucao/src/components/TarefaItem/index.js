import React from 'react';

const TarefaItem = (props) => {

    return(
        <li>
        <input type="checkbox" checked={props.tarefa.completa}/> { props.tarefa.texto} 
        </li>
    )
}

export default TarefaItem;