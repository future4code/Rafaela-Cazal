import React from 'react';
import './App.css';

import ImageButton from './components/ImageButton/ImageButton';
import BigCard from './components/BigCard/BigCard';
import SmallCard from './components/SmallCard/SmallCard';

function App() {
  return (
    <div className="App">
      <h2 className="titulo-container"> Dados Pessoais </h2> 
        <BigCard 
         imagem="https://image.flaticon.com/icons/svg/1360/1360449.svg" nome="Rafaela Cazal" 
          texto="Estudante de desenvolvimento web pela Future4, migrei de publicidade para tecnologia e estou encarando o desafio
          de me tornar uma futura desenvolvedora!"/>
          <SmallCard imagem="https://image.flaticon.com/icons/svg/37/37572.svg" 
          email="E-mail: " texto=" rafaela@future4.com"/>
          <SmallCard imagem="https://image.flaticon.com/icons/svg/1295/1295181.svg"texto=" Rua Luiz de Oliveira, 180"/>
          <h2 className="redes-sociais">Experiência profissional</h2>    
          <h2 className="redes-sociais">Minhas Redes Sociais</h2>
                

    </div>
  );
}

export default App;