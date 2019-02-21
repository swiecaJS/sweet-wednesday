import {
  ADD_CANDY,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  SET_LOADER
} from "../actions/types";
import _ from "lodash";
import * as firebase from "firebase";

export const firebaseSync = store => next => action => {
  console.log("firebase sunc here", store, next, action);

  const actionsRelatedToSync = [
    ADD_CANDY,
    DECREMENT_QUANTITY,
    INCREMENT_QUANTITY
  ];

  if (actionsRelatedToSync.includes(action.type)) {
    console.log("SYNC NEEDED");
    syncDebounced(store);
  }

  next(action);
};

const performSync = store => {
  store.dispatch({
    type: SET_LOADER,
    payload: true
  });
  firebase
    .database()
    .ref("/sweets")
    .set(store.getState().sweets)
    .then(resp => console.log(resp))
    .catch(err => console.error(err))
    .finally(() => {
      store.dispatch({
        type: SET_LOADER,
        payload: false
      });
    });
  console.log("DOING SYNC", store.getState());
};

const syncDebounced = _.debounce(performSync, 500);
