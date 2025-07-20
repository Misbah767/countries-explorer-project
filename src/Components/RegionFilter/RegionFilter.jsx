import React from "react";
import { useCountriesContext } from "../../Context/CountriesContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./RegionFilter.css";

function RegionFilter() {
  const { state, dispatch } = useCountriesContext();
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleRegionChange = (e) => {
    dispatch({ type: "SET_SELECTED_REGION", payload: e.target.value });
  };

  return (
    <div className="region-filter">
      <select
        value={state.selectedRegion}
        onChange={handleRegionChange}
        className="region-select"
      >
        <option value="">All Regions</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      <span className="custom-arrow">
        <i className="bi bi-caret-down-fill"></i>
      </span>
    </div>
  );
}

export default RegionFilter;
