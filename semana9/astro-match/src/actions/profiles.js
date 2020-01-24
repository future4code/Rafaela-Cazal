import api from "./api";
import {
  GET_CURRENT_PROFILE_SUCCESS,
  GET_CURRENT_PROFILE_ERROR
} from "./types";

export const clearSwipes = () => async dispatch => {
  await api.put("/clear");
};

export const getSwipes = () => async dispatch => {
  try {
    const response = await api.get("/person");

    console.log(response.data);

    dispatch({
      type: GET_CURRENT_PROFILE_SUCCESS,
      payload: { ...response.data.profile }
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: GET_CURRENT_PROFILE_ERROR, payload: {} });
  }
};
