import axios from 'axios';

export const FETCH_SUCCESS= "FETCH_SUCCESS";
export const REMOVE_TOKEN = "REMOVE_TOKEN";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchToken = (credentials) => dispatch => {
  axios.post("http://localhost:5000/api/login", credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      dispatch(fetchSuccess(res.data.payload));
    })
    .catch(err => {
      dispatch(fetchError('Invalid Username or Password'));
    });
};

export const fetchSuccess = (token) => {
  return {type: FETCH_SUCCESS, payload:token}
};

export const removeToken = () => {
  localStorage.removeItem('token');
  return {type: REMOVE_TOKEN}
};

export const fetchError = (error) => {
  console.log(error);
  return {type: FETCH_ERROR, payload:error}
};