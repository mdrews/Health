import { GET_WEIGHT, ADD_WEIGHT, SET_LOADING, REMOVE_WEIGHT } from "./consts"
import axios from "axios";

export const addWeight = weight => dispatch => {
  console.log('action: add weight');
  axios
    .post('api/weights', weight)
    .then()
  return {
    type: ADD_WEIGHT,
    weight
  }
}

export const getWeights = () => dispatch => {
  console.log('action: get weight');
  dispatch(setLoading());
  axios
    .get('/api/weights')
    .then(response => 
      dispatch({
        type: GET_WEIGHT,
        weights: response.data
    }));
}

export const removeWeight = id => dispatch => {
  console.log('action: remove weight');
  dispatch(setLoading());
  axios
    .delete('/api/weights', id)
    .then(() => 
      dispatch({
        type: REMOVE_WEIGHT,
        id
      }))
}


export const setLoading = () => {
  console.log('action: set loading');
  return {
    type: SET_LOADING
  }
}