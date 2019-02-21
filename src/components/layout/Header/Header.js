import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import "./Header.scss";

function Header({ history, isLoading }) {
  const loadingIndicator = () => {
    return (
      <div
        className={
          "loadingWrapper " +
          (isLoading ? "loadingWrapper--visible" : "loadingWrapper--hidden")
        }
      >
        <p>sync in progress</p>
        <div className="ui active inline loader" />
      </div>
    );
  };

  return (
    <header className="header">
      <div
        className="logoWrapper"
        role="presentation"
        onClick={() => history.push("/")}
      >
        <img
          src="https://www.netguru.com/hubfs/images/ico/tiles/netguru.png"
          alt="Netguru logo"
        />
        <span role="img" aria-label="sweet cake image">
          🍰
        </span>
      </div>
      {loadingIndicator()}
    </header>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Header);
