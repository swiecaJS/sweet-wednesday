import React from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";
import withLayout from "../../hoc/withLayout";
import CityTable from "../../components/layout/CityTable";
import FoodForm from "../../components/FoodForm";
import CityInformation from "../../components/CityInformation";
import GoShoppingBtn from "../../components/GoShoppingBtn";
import "./City.scss";

function City(props) {
  const cityUri = props.match.params.city;
  return (
    <Container className="cityWrapper">
      <CityInformation cityUri={cityUri} />
      <FoodForm cityUri={cityUri} />
      <GoShoppingBtn cityUri={cityUri} />
      <CityTable cityUri={cityUri} />
    </Container>
  );
}

export default compose(
  withLayout,
  withRouter
)(City);
