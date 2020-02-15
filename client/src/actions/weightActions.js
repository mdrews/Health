import { GET_WEIGHT, ADD_WEIGHT, SET_LOADING } from "./consts"
import Axios from "axios"

export const addWeight = weight => {
  return {
    type: ADD_WEIGHT,
    weight
  }
}

export const getWeights = () => dispatch => {
  console.log('action: get weight')
  dispatch(setWeightLoading);
  Axios.get('/api/weights');
}

export const setWeightLoading = () => {
  return {
    type: SET_LOADING
  }
}