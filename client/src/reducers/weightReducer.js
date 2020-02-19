import { ADD_WEIGHT, SET_LOADING } from "../actions/consts";

export const weightReducer = (state = [], action) => {
  console.log('reducer');
  switch(action.type) {
    case ADD_WEIGHT:
      return [...state, { date: Date.now(), weight: action.weight }]
    case SET_LOADING:
      console.log('updating');
      return state;
    default:
      return state;
  }
}