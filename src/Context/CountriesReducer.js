function countriesReducer(state, action) {
  switch (action.type) {
    case "SET_COUNTRIES": {
      const countries = action.payload;
      return {
        ...state,
        allCountries: countries,
        visibleCountries: countries,
        countryCodeToName: countries.reduce((acc, c) => {
          acc[c.cca3] = c.name.common;
          return acc;
        }, {}),
        loading: false,
        error: null,
      };
    }

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "SET_SELECTED_COUNTRY":
      return {
        ...state,
        selectedCountry: action.payload,
        detailLoading: false,
      };

    case "SET_DETAIL_LOADING":
      return {
        ...state,
        detailLoading: true,
      };

    case "CLEAR_SELECTED_COUNTRY":
      return {
        ...state,
        selectedCountry: null,
        detailLoading: false,
        loading: true,
      };

    case "SET_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.payload,
      };

    case "SET_SELECTED_REGION":
      return {
        ...state,
        selectedRegion: action.payload,
      };

    case "SET_VISIBLE_COUNTRIES":
      return {
        ...state,
        visibleCountries: action.payload,
      };

    case "SET_NO_RESULT":
      return {
        ...state,
        noResult: action.payload,
      };

    default:
      return state;
  }
}

export default countriesReducer;
