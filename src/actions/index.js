import isUrl from "is-url";

import { ADD_CANDY, INCREMENT_QUANTITY } from "./types";

export const addCandy = (urlsArray, cityUri) => (dispatch, getState) => {
  urlsArray.forEach(url => {
    if (isUrl(url) && url.includes("piotripawel")) {
      // examoole url https://www.e-piotripawel.pl/towar/pestki-dyni/22209
      const productId = url.split("/").pop();

      const sweets = getState().sweets;
      const isCandyInState =
        sweets.hasOwnProperty(cityUri) &&
        sweets[cityUri].hasOwnProperty(productId);

      console.log("isCandyInState", isCandyInState);

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

// export const fetchDataFromPeterAndPaul = (urlsArray, cityUri) => async (
//   dispatch,
//   getState
// ) => {
//   const fetchArray = urlsArray.reduce((accumulator, currentValue) => {
//     if (isUrl(currentValue)) {
//       accumulator.push(
//         fetch(`https://cors-anywhere.herokuapp.com/${currentValue}`)
//       );
//     }
//     return accumulator;
//   }, []);
//   console.log("fetchArray", fetchArray);

//   const fetchResponses = await Promise.all(fetchArray);

//   const textResponsePromises = fetchResponses.map(response => response.text());

//   const textResponses = await Promise.all(textResponsePromises);

//   console.log("fetchDataFromPeterAndPaul", textResponses);

//   textResponses.forEach(textResponse =>
//     dispatch(scrapePeterAndPaulData(textResponse, cityUri))
//   );
//   // dispatch(scrapePeterAndPaulData(te))
// };

// const scrapePeterAndPaulData = (htmlString, cityUri) => dispatch => {
//   const parser = new DOMParser();

//   const html = parser.parseFromString(htmlString, "text/html");

//   const price = html.querySelector("div.product-price > span");
//   const productName = html.querySelector('h1[itemprop="name"]');
//   console.log(price);
//   dispatch({
//     type: ADD_CANDY,
//     payload: {
//       city: cityUri,
//       data: {
//         productName,
//         price
//       }
//     }
//   });
// };
