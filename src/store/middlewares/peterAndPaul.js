import { ADD_CANDY } from "../actions/types";

export const peterAndPaul = store => next => action => {
  console.log("peterAndPaulMiddleWare", store, next, action);
  if (action.type === ADD_CANDY) {
    fetchPeterAndPaulData(action.payload, store);
  }
  next(action);
};

const fetchPeterAndPaulData = async (payload, store) => {
  /**
   * TO DO!
   * Cannot scrape from cient side - will create serverless scraper with pupetteer :D
   */
};
