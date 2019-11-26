import React from 'react';

import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpeg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpeg'
import img7 from './images/img7.jpeg'
import img8 from './images/img8.jpeg'

import './App.css';

function App() {
  return (
    <div className="main-container">
      <header>
        <h2>FutureTube</h2>
        <input type="search" placeholder="Buscar"/>
      </header>

      <div className="container">
        <nav>
          <p>Início</p>
          <p>Em alta</p>
          <p>Inscrições</p>
          <p>Originais</p>
          <p>Biblioteca</p>
          <p>Histórico</p>
        </nav>

        <section>
          <article>
            <img src={img1} />
            <p className="imagens" >Media 1</p>
          </article>

          <article>
            <img src={img2}/>
            <p className="imagens">Media 2</p>
          </article>

          <article>
            <img src={img3} />
            <p className="imagens">Media 3</p>
          </article>

          <article>
            <img src={img4}/>
            <p className="imagens">Media 4</p>
          </article>

          <article>
            <img src={img5} alt="img5"/>
            <p className="imagens">Media 5</p>
          </article>

          <article>
            <img src={img6} />
            <p className="imagens">Media 6</p>
          </article>

          <article>
            <img src={img7} />
            <p className="imagens">Media 7</p>
          </article>

          <article>
            <img src={img8} />
            <p className="imagens">Media 8</p>
          </article>

        </section>

      </div>

      <footer> © FutureTube - Todos os direitos reservados - 2019 </footer>
    </div>
  );
}

export default App;