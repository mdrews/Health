import { GET_WEIGHT, ADD_WEIGHT } from "./consts"

export const addWeight = weight => {
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