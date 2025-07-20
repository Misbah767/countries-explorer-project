import React, { createContext, useContext } from "react";

// Create context
const CountriesContext = createContext(null);

// Custom hook to consume context
export function useCountriesContext() {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error(
      "useCountriesContext must be used within a CountriesProvider"
    );
  }
  return context;
}

export default CountriesContext;
