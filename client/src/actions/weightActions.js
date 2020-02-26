import { GET_WEIGHT, ADD_WEIGHT, SET_LOADING } from "./consts"
import Axios from "axios";

export const addWeight = weight => dispatch => {
  console.log('action: add weight');
  Axios
    .post('api/weights')
    .then();
  return {
    type: ADD_WEIGHT,
    weight
  }
}

export const getWeights = () => {
  return {
    type: GET_WEIGHT
  }
}

// export const getWeights = () => dispatch => {
//   console.log('action: get weight');
//   dispatch(setLoading());
//   Axios
//     .get('/api/weights')
//     .then(response => {
//       dispatch({
//         type: GET_WEIGHT,
//         payload: response.data
//       });
//   });
// }

export const setLoading = () => {
  console.log('action: set loading');
  return {
    type: SET_LOADING
  }
}