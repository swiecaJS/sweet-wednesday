import {
  ADD_CANDY,
  INCREMENT_QUANTITY,
  SET_CANDY_NAME
} from "../actions/types";
const initialState = {};

export default (state = initialState, action) => {
  let candy;
  let currentCitySweets;

  if (action.payload && state.hasOwnProperty([action.payload.city])) {
    currentCitySweets = state[action.payload.city];
    candy = state[action.payload.city][action.payload.productId];
  }
  switch (action.type) {
    case ADD_CANDY:
      if (state.hasOwnProperty([action.payload.city])) {
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
      candy.quantity = candy.quantity + 1;

      return {
        ...state,
        [action.payload.city]: {
          ...currentCitySweets,
          [action.payload.productId]: candy
        }
      };
    case SET_CANDY_NAME:
      console.log("SET_CANDY_NAME", action, candy, state);
      return state;
    default:
      return state;
  }
};
