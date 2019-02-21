import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import "./GoShoppingBtn.scss";

const GoShoppingBtn = ({ cityUri, urls }) => {
  const openPeterAndPaulCarts = () => {
    urls.forEach(url => {
      window.open(url, "_blank");
    });
  };

  if (!urls.length) {
    return null;
  }

  return (
    <section className="shoppingWrapper">
      <p>
        Are you ready to {cityUri}
        <Button className="big basic positive" onClick={openPeterAndPaulCarts}>
          Go Shopping
        </Button>
        ?
      </p>
    </section>
  );
};
const mapStateToProps = (state, ownProps) => {
  let urls = [];
  if (state.sweets.hasOwnProperty(ownProps.cityUri)) {
    const sweets = Object.values(state.sweets[ownProps.cityUri]);
    urls = sweets.reduce((accumulator, current) => {
      accumulator.push(current.url);
      return accumulator;
    }, []);
  }
  return {
    urls
  };
};
export default connect(mapStateToProps)(GoShoppingBtn);
