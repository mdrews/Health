import { GET_WEIGHT, ADD_WEIGHT, SET_LOADING } from "./consts"
<<<<<<< HEAD
import Axios from "axios"
=======
>>>>>>> c20d5f918f7d388da82b0e670ffaf6327565dd53

export const addWeight = weight => {
  console.log('action: add weight');
  return {
    type: ADD_WEIGHT,
    weight
  }
}

export const getWeights = () => dispatch => {
<<<<<<< HEAD
  console.log('action: get weight')
  dispatch(setWeightLoading);
  Axios.get('/api/weights');
}

export const setWeightLoading = () => {
=======
  dispatch(setLoading());
  console.log('action: get weight');
>>>>>>> c20d5f918f7d388da82b0e670ffaf6327565dd53
  return {
    type: SET_LOADING
  }
}

export const setLoading = () => {
  console.log('action: set loading');
  return {
    type: SET_LOADING
  }
}