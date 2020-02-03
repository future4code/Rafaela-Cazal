import axios from 'axios'
import { baseURL} from '../api'

export const setAllTasks = (allTasks) => ({
    type: 'SET_ALL_TASKS',
    payload: {
        allTasks,
    }
})

export const getAllTasks = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseURL}`)

        dispatch(setAllTasks(response.data))
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar acessar as suas tarefas.");
    }
} 

export const createTask = (text, day) => async (dispatch) => {
    const taskData = {
        text,
        day,
    }

    try {
        await axios.post(`${baseURL}`, taskData);

        dispatch(getAllTasks());
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar criar uma nova tarefa.");
    }
} 



