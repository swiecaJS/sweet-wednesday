import React from "react";
import { Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  incrementCandyQuantity,
  decrementCandyQuantity
} from "../../../store/actions";
const QuantityControls = ({
  productId,
  cityUri,
  incrementCandyQuantity,
  decrementCandyQuantity
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
    </div>
  );
};

export default connect(
  null,
  { incrementCandyQuantity, decrementCandyQuantity }
)(QuantityControls);
