import {
  GET_CURRENT_PROFILE_SUCCESS,
  GET_CURRENT_PROFILE_ERROR
} from "../actions/types";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_PROFILE_SUCCESS:
      console.log(action.payload);
      return { ...state, ...action.payload };

    case GET_CURRENT_PROFILE_ERROR:
      return {};

    default:
      return state;
  }
};
