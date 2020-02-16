import { GET_WEIGHT, ADD_WEIGHT, SET_LOADING } from "./consts"

export const addWeight = weight => {
  console.log('action: add weight');
  return {
    type: ADD_WEIGHT,
    weight
  }
}

export const getWeights = () => dispatch => {
  dispatch(setLoading());
  console.log('action: get weight');
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