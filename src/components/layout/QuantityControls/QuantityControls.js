import React from "react";
import { Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  incrementCandyQuantity,
  decrementCandyQuantity,
  deleteCandy
} from "../../../store/actions";
const QuantityControls = ({
  productId,
  cityUri,
  incrementCandyQuantity,
  decrementCandyQuantity,
  deleteCandy
}) => {
  return (
    <div className="controls">
      <Icon
        name="minus"
        onClick={() => decrementCandyQuantity(cityUri, productId)}
      />
      <Icon
        name="plus"
        onClick={() => incrementCandyQuantity(cityUri, productId)}
      />
      <Icon
        name="trash alternate"
        onClick={() => deleteCandy(cityUri, productId)}
      />
    </div>
  );
};

export default connect(
  null,
  { incrementCandyQuantity, decrementCandyQuantity, deleteCandy }
)(QuantityControls);
