import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../Home";
export default function Root() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </React.Fragment>
  );
}
