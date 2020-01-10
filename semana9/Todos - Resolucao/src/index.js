import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ListadeTarefas from './components/ListadeTarefas';
import FormularioTarefa from './components/FormularioTarefa';


const App = () => (
<Provider store={store} >
<FormularioTarefa/>
<ListadeTarefas/>
</Provider>
)

const rootElement = document.getElementById("root");
ReactDom.render(<App/>, rootElement);