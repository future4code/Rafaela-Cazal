import axios from 'axios';

export const getTodos = () => async (dispatch, getState) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/rafacazal/todos");

    dispatch(setPostsAction(response.data.todos));
}
