import React from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";
import withLayout from "../../hoc/withLayout";
import CityTable from "../../components/layout/CityTable";
import FoodForm from "../../components/FoodForm";
import CityInformation from "../../components/CityInformation";
import "./City.scss";

function City({ match }) {
  const cityUri = match.params.city;
  return (
    <Container className="cityWrapper">
      <CityInformation cityUri={cityUri} />
      <FoodForm cityUri={cityUri} />
      <CityTable cityUri={cityUri} />
    </Container>
  );
}

export default compose(
  withLayout,
  withRouter
)(City);
