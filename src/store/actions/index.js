import isUrl from "is-url";

import { ADD_CANDY, INCREMENT_QUANTITY } from "./types";

export const addCandy = (urlsArray, cityUri) => (dispatch, getState) => {
  urlsArray.forEach(url => {
    if (isUrl(url) && url.includes("piotripawel")) {
      // example url https://www.e-piotripawel.pl/towar/pestki-dyni/22209
      const productId = url.split("/").pop();

      const sweets = getState().sweets;
      const isCandyInState =
        sweets.hasOwnProperty(cityUri) &&
        sweets[cityUri].hasOwnProperty(productId);

      if (isCandyInState) {
        dispatch({
          type: INCREMENT_QUANTITY,
          payload: {
            city: cityUri,
            productId
          }
        });
      } else {
        dispatch({
          type: ADD_CANDY,
          payload: {
            city: cityUri,
            data: {
              url,
              productId,
              quantity: 1
            }
          }
        });
      }
    }
  });
};
