import React from "react";
import { withRouter } from "react-router-dom";
import "./CityButton.scss";

function CityButton({ history, name, uri }) {
  return (
    <button className="cityBtn" onClick={() => history.push(`/${uri}`)}>
      {name}
    </button>
  );
}

export default withRouter(CityButton);
