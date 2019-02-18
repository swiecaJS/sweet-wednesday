import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Home";
import City from "../City";

export default function Root() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:city" component={City} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}
