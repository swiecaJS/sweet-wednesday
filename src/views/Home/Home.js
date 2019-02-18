import React from "react";
import withLayout from "../../hoc/withLayout";
import "./Home.scss";
import CityButton from "../../components/layout/CityButton";

import { connect } from "react-redux";
import { compose } from "redux";

function Home({ cities }) {
  const renderButtons = () => {
    return cities.map(city => {
      return <CityButton key={city.uri} {...city} />;
    });
  };

  return (
    <section className="home">
      <div className="content">
        <h1>
          Sweet Wednesday
          <span role="img" aria-label="emojis of cake">
            🍰
          </span>
        </h1>
        <div className="cities">
          <p>Pick a city:</p>
          <div className="citiesButtonsWrapper">{renderButtons()}</div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    cities: state.cities
  };
};

export default compose(
  withLayout,
  connect(mapStateToProps)
)(Home);
