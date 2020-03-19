import { ADD_WEIGHT, SET_LOADING, GET_WEIGHT, REMOVE_WEIGHT } from "../actions/consts";

export const weightReducer = (state = [], action) => {
  console.log('reducer');
  switch(action.type) {
    case ADD_WEIGHT:
      return [...state, { date: Date.now(), weight: action.weight }];
    case GET_WEIGHT:
      console.log('reducer: get_weight');
      return {loading: false, weights: action.weights};
    case REMOVE_WEIGHT:
      console.log('reducer: remove_weight');
      return { loading: false, weights: action.weights};
    case SET_LOADING:
      console.log('loading...');
      return {...state, loading: true};
    default:
      return state;
  }
}