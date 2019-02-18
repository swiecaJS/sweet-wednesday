import React from "react";
import withLayout from "../../hoc/withLayout";
import "./Home.scss";

function Home() {
  return (
    <section className="home">
      <div className="content">
        <h1>
          Sweet Wednesday
          <span role="img" aria-label="emojis of cake">
            🧁🍰🥮
          </span>
        </h1>
        <div className="cities">
          <p>btns</p>
        </div>
      </div>
    </section>
  );
}

export default withLayout(Home);
// export default Home;
