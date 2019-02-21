import isUrl from "is-url";
import * as firebase from "firebase";

import {
  ADD_CANDY,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  SET_LOADER,
  FETCH_CANDIES,
  DELETE_CANDY
} from "./types";

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

export const deleteCandy = (city, productId) => dispatch => {
  console.log("deleteCandy", city, productId);
  dispatch({
    type: DELETE_CANDY,
    payload: {
      city,
      productId
    }
  });
};

export const fetchCandies = () => dispatch => {
  console.log("feczuje candies", firebase);
  if (firebase.apps.length === 0) {
    firebase.initializeApp({
      apiKey: "AIzaSyA1-aKXUHlUXjM8Mgc-4nESFpEAqqHcB_I",
      authDomain: "vue-meetup-yt.firebaseapp.com",
      databaseURL: "https://vue-meetup-yt.firebaseio.com",
      projectId: "vue-meetup-yt",
      storageBucket: "gs://vue-meetup-yt.appspot.com"
    });
  }
  dispatch({
    type: SET_LOADER,
    payload: true
  });
  firebase
    .database()
    .ref("sweets")
    .once("value")
    .then(data => {
      console.log("firebase data", data.val());
      dispatch({
        type: FETCH_CANDIES,
        payload: data.val()
      });
    })
    .finally(() => {
      dispatch({
        type: SET_LOADER,
        payload: false
      });
    });
};

export const incrementCandyQuantity = (city, productId) => dispatch => {
  dispatch({
    type: INCREMENT_QUANTITY,
    payload: {
      city,
      productId
    }
  });
};
export const decrementCandyQuantity = (city, productId) => dispatch => {
  dispatch({
    type: DECREMENT_QUANTITY,
    payload: {
      city,
      productId
    }
  });
};
