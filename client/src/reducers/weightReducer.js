import { ADD_WEIGHT, SET_LOADING, GET_WEIGHT } from "../actions/consts";

export const weightReducer = (state = [], action) => {
  console.log('reducer');
  switch(action.type) {
    case ADD_WEIGHT:
      return [...state, { date: Date.now(), weight: action.weight }];
    case GET_WEIGHT:
      console.log('reducer: get_weight');
      return {loading: false, weights: action.weights};
    case SET_LOADING:
      // comment 2
      console.log('updating');
      return state;
    default:
      return state;
  }
}