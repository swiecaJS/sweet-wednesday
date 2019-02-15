import React from "react";
import Header from "../components/layout/Header";

const withLayout = WrappedComponent => {
  return () => {
    return (
      <React.Fragment>
        <Header />
        <WrappedComponent />
      </React.Fragment>
    );
  };
};

export default withLayout;
