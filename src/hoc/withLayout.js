import React from "react";
import Header from "../components/layout/Header";
import "./Layout.scss";

const withLayout = WrappedComponent => {
  return () => {
    return (
      <div className="bg">
        <Header />
        <WrappedComponent />
      </div>
    );
  };
};

export default withLayout;
