import React from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import withLayout from "../../hoc/withLayout";

function City({ match }) {
  console.log("city", match.params.city);
  const cityUri = match.params.city;
  return (
    <div>
      <h1>City view {cityUri}</h1>
    </div>
  );
}

export default compose(
  withLayout,
  withRouter
)(City);
