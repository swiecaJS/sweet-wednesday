import { ADD_CANDY } from "../actions/types";
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CANDY:
      return [...state, action.payload];
    default:
      return state;
  }
};
