import React, { useReducer, useEffect } from "react";
import CountriesContext from "./CountriesContext";
import CountriesReducer from "./CountriesReducer";
import InitialStates from "./InitialStates";
import { fetchMainCountries, fetchTldCountries } from "../api/countriesApi";

export function CountriesProvider({ children }) {
  const [state, dispatch] = useReducer(CountriesReducer, InitialStates);

  const loadCountries = async () => {
    try {
      const fields =
        "name,flags,region,subregion,population,capital,cca3,languages,borders,currencies";

      const [mainRes, tldRes] = await Promise.all([
        fetchMainCountries(fields),
        fetchTldCountries(),
      ]);

      if (!mainRes?.data || !tldRes?.data) {
        throw new Error("Invalid API response");
      }

      const combined = mainRes.data.map((country) => {
        const tldMatch = tldRes.data.find(
          (c) => c.name.common === country.name.common
        );
        return { ...country, tld: tldMatch?.tld || [] };
      });

      dispatch({ type: "SET_COUNTRIES", payload: combined });
    } catch (err) {
      console.error("Failed to fetch countries:", err);
      dispatch({
        type: "SET_ERROR",
        payload: "Unable to fetch country data",
      });
    }
  };

  useEffect(() => {
    if (state.loading) loadCountries();
  }, [state.loading]);

  useEffect(() => {
    const { allCountries, searchText, selectedRegion } = state;
    let filtered = allCountries;

    if (searchText.trim()) {
      const search = searchText.toLowerCase();
      filtered = filtered.filter((c) =>
        c.name.common.toLowerCase().includes(search)
      );
    }

    if (selectedRegion) {
      filtered = filtered.filter(
        (c) => c.region?.toLowerCase() === selectedRegion.toLowerCase()
      );
    }

    dispatch({ type: "SET_VISIBLE_COUNTRIES", payload: filtered });
    dispatch({
      type: "SET_NO_RESULT",
      payload: filtered.length === 0 && searchText.trim() !== "",
    });
  }, [state.searchText, state.selectedRegion, state.allCountries]);

  return (
    <CountriesContext.Provider value={{ state, dispatch }}>
      {children}
    </CountriesContext.Provider>
  );
}
