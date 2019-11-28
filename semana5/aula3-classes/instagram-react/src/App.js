import React from 'react';
import './App.css';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="App">   

    <h2> InstaFuture</h2>  
      <Post 
      user="future.4" 
      img="https://images.unsplash.com/photo-1462331321792-cc44368b8894?ixlib=rb-1.2.1&auto=format&fit=crop&w=1122&q=80" 
      iconFav="https://svgshare.com/i/GSo.svg" 
      iconComent="http://soter.ninja/static/media/comment.de299b47.svg"/>
      <Post 
      user="future.4" 
      img="https://images.unsplash.com/photo-1457327289196-f38b88d97147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1052&q=80" 
      iconFav="https://svgshare.com/i/GSo.svg" 
      iconComent="http://soter.ninja/static/media/comment.de299b47.svg"/>
      <Post 
      user="future.4" 
      img="https://images.unsplash.com/photo-1451188502541-13943edb6acb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" 
      iconFav="https://svgshare.com/i/GSo.svg" 
      iconComent="http://soter.ninja/static/media/comment.de299b47.svg" />

    </div>
  );
}

export default App;