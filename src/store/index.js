import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
// import { peterAndPaul } from "./middlewares/peterAndPaul";
import { firebaseSync } from "./middlewares/firebaseSync";

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk, firebaseSync))
);

export default store;
