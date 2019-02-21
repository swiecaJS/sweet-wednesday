import React from "react";
import Header from "../components/layout/Header";
import "./Layout.scss";

const withLayout = WrappedComponent => {
  return () => {
    return (
      <main className="bg">
        <Header />
        <WrappedComponent />
      </main>
    );
  };
};

export default withLayout;
