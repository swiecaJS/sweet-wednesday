import React from "react";
import Header from "../components/layout/Header";
import "./Layout.scss";

const withLayout = WrappedComponent => {
  return () => {
    return (
      <div class="bg">
        <Header />
        <WrappedComponent />
      </div>
    );
  };
};

export default withLayout;
