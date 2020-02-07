import { ADD_WEIGHT } from "../actions/consts";

export const weightReducer = (state = [], action) => {
  console.log('reducer');
  switch(action.type) {
    case ADD_WEIGHT:
      return [...state, { date: Date.now(), weight: action.weight }]
    default:
      return state;
  }
}