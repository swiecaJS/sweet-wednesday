import React from "react";
import withLayout from "../../hoc/withLayout";
import "./Home.scss";
import CityButton from "../../components/layout/CityButton";

function Home() {
  const cities = [
    {
      uri: "krakow",
      name: "Kraków"
    },
    {
      uri: "warszawa",
      name: "Warszawa"
    },
    {
      uri: "poznan",
      name: "Poznań"
    },
    {
      uri: "wroclaw",
      name: "Wrocław"
    },
    {
      uri: "gdansk",
      name: "Gdańsk"
    },
    {
      uri: "bialystok",
      name: "Białystok"
    }
  ];

  const renderButtons = () => {
    return cities.map(city => {
      return <CityButton key={city.uri} {...city} />;
    });
  };

  return (
    <section className="home">
      <div className="content">
        <h1>
          Sweet Wednesday
          <span role="img" aria-label="emojis of cake">
            🍰
          </span>
        </h1>
        <div className="cities">
          <p>Pick a city:</p>
          <div className="citiesButtonsWrapper">{renderButtons()}</div>
        </div>
      </div>
    </section>
  );
}

export default withLayout(Home);
// export default Home;
