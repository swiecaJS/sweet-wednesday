import React from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";
import withLayout from "../../hoc/withLayout";
import CityTable from "../../components/layout/CityTable";
import FoodForm from "../../components/FoodForm";
import CityInformation from "../../components/CityInformation";

function City({ match }) {
  console.log("city", match.params.city);
  const cityUri = match.params.city;
  return (
    <Container>
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
