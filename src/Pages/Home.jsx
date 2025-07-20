import React from "react";
import CountryList from "../Components/CountryList/CountryList";
import Shimmer from "../Components/Shimmer/Shimmer";

import { useCountriesContext } from "../Context/CountriesContext";

function Home() {
  const { state } = useCountriesContext();

  return (
    <main className="home-container">
      {state.loading ? <Shimmer /> : <CountryList />}
    </main>
  );
}

export default Home;
