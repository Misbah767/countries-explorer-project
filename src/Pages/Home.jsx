import React from "react";
import CountryList from "../components/CountryList/CountryList";
import Shimmer from "../components/Shimmer/Shimmer";
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
