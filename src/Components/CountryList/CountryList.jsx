import React from "react";
import { useNavigate } from "react-router-dom";
import { useCountriesContext } from "../../Context/CountriesContext";
import CountryCard from "../CountryCard/CountryCard";
import RegionFilter from "../RegionFilter/RegionFilter";
import Search from "../Search/Search";
import "./CountryList.css";

function CountryList() {
  const { state, dispatch } = useCountriesContext();
  const navigate = useNavigate();

  const handleCountryClick = (country) => {
    dispatch({ type: "SET_SELECTED_COUNTRY", payload: country });
    navigate(`/country/${country.cca3}`);
  };

  const renderCountries = () =>
    state.visibleCountries.map((country, index) => (
      <CountryCard
        key={country.cca3}
        country={country}
        index={index}
        onClick={() => handleCountryClick(country)}
      />
    ));

  return (
    <div className="container">
      <div className="filters-container">
        <div className="search-wrapper">
          <Search
            value={state.searchText}
            onChange={(e) =>
              dispatch({ type: "SET_SEARCH_TEXT", payload: e.target.value })
            }
          />
        </div>
        <div className="region-wrapper">
          <RegionFilter />
        </div>
      </div>

      <div className="country-list-container">
        {state.noResult ? (
          <div className="no-result-message animate__animated animate__fadeIn">
            <i className="bi bi-emoji-frown"></i>
            <p>
              No countries found for "<strong>{state.searchText}</strong>"
            </p>
            <p className="spellLine">
              Please check the spelling or try a different name.
            </p>
          </div>
        ) : (
          renderCountries()
        )}
      </div>
    </div>
  );
}

export default CountryList;
