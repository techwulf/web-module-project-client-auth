import {FETCH_SUCCESS, FETCH_ERROR, REMOVE_TOKEN} from "../actions";

const initialState = {
  token: localStorage.getItem('token'),
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_SUCCESS):
      return({
        ...state,
        token: action.payload,
        error: ''
      });
    case(FETCH_ERROR):
      return({
        ...state,
        error: action.payload
      });
    case(REMOVE_TOKEN):
      return({
        ...state,
        token: ''
      })
    default:
      return state;
  }
}