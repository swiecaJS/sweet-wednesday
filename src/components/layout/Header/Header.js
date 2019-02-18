import React from "react";
import { withRouter } from "react-router-dom";
import "./Header.scss";

function Header({ history }) {
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
    </header>
  );
}

export default withRouter(Header);
