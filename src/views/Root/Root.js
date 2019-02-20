import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import store from "../../store";

import Home from "../Home";
import City from "../City";

export default function Root() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:city" component={City} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}
