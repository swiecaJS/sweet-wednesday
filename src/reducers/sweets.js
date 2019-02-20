import { ADD_CANDY } from "../actions/types";
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CANDY:
      if (state.hasOwnProperty([action.payload.city])) {
        const currentCitySweets = state[action.payload.city];
        return {
          ...state,
          [action.payload.city]: {
            ...currentCitySweets,
            [action.payload.data.productId]: action.payload.data
          }
        };
      } else {
        return {
          ...state,
          [action.payload.city]: {
            [action.payload.data.productId]: action.payload.data
          }
        };
      }
    default:
      return state;
  }
};
