import { ADD_CANDY, INCREMENT_QUANTITY } from "../actions/types";
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
    case INCREMENT_QUANTITY:
      const currentCitySweets = state[action.payload.city];
      const candy = state[action.payload.city][action.payload.productId];
      candy.quantity = candy.quantity + 1;

      return {
        ...state,
        [action.payload.city]: {
          ...currentCitySweets,
          [action.payload.productId]: candy
        }
      };

    default:
      return state;
  }
};
