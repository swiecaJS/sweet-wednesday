import React from "react";
import { Icon } from "semantic-ui-react";
const QuantityControls = ({ productId, cityUri }) => {
  return (
    <div className="controls">
      <p>
        {productId} {cityUri}
      </p>
      <Icon name="minus" />
      <Icon name="plus" />
    </div>
  );
};

export default QuantityControls;
