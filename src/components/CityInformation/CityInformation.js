import React from "react";
import { connect } from "react-redux";

const MoneyLeft = props => {
  const { city } = props;
  return (
    <div>
      <h2>{city.name}</h2>
      <p>Moeny left</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const currentCity = state.cities.find(city => city.uri === ownProps.cityUri);
  return { city: currentCity };
};
export default connect(mapStateToProps)(MoneyLeft);
