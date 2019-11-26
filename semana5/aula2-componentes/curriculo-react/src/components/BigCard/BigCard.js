import React from 'react';
import './BigCard.css'

function BigCard(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h2> { props.titulo}</h2>
                <h3>{ props.nome }</h3>
                <p>{ props.texto }</p>
            </div>
        </div>
    )
}

export default BigCard; 