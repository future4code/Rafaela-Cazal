import tarefas from './tarefas';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    tarefas,
});

export default rootReducer;
