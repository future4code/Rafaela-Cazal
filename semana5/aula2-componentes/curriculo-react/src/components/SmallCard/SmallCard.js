import React from 'react';
import './SmallCard.css'

function SmallCard(props) {
    return (
        <div className="smallcard-container">
         <img src={ props.imagem } />
        <p><strong> { props.email } </strong> { props.texto } </p>
        <p> { props.endereco } </p>
    </div>
)
}

export default SmallCard; 