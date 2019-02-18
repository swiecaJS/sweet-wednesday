import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="logoWrapper">
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

export default Header;
