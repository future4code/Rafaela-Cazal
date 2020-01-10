import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import ListadeTarefas from './components/ListadeTarefas';


const App = () => (
<Provider store={store} >
<ListadeTarefas/>
</Provider>
)

const rootElement = document.getElementById("root");
React.render(<App/>, rootElement);