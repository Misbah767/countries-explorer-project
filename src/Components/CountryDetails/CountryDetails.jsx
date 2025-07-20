import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCountriesContext } from "../../Context/CountriesContext";
import NotFound from "../../Pages/NotFound";
import "./CountryDetails.css";

function CountryDetails() {
  const { state, dispatch } = useCountriesContext();
  const navigate = useNavigate();
  const { code } = useParams();

  const [animateClass, setAnimateClass] = useState("enter");
  const [notFound, setNotFound] = useState(false);

  const country = state.allCountries.find((c) => c.cca3 === code);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (!country) {
      setNotFound(true);
    } else {
      dispatch({ type: "SET_SELECTED_COUNTRY", payload: country });
    }

    const timer = setTimeout(() => setAnimateClass(""), 500);
    return () => clearTimeout(timer);
  }, [code, country, dispatch]);

  const handleBackClick = useCallback(() => {
    setAnimateClass("exit");
    setTimeout(() => {
      dispatch({ type: "CLEAR_SELECTED_COUNTRY" });
      navigate("/");
    }, 400);
  }, [dispatch, navigate]);

  const handleBorderClick = useCallback(
    (borderCode) => {
      setAnimateClass("exit");
      setTimeout(() => {
        navigate(`/country/${borderCode}`);
      }, 400);
    },
    [navigate]
  );

  if (!state.allCountries.length) return <div>Loading...</div>;
  if (notFound) return <NotFound />;
  if (!country) return <div>Loading country...</div>;

  const {
    flags: { png: flag },
    name: { common: name },
    population,
    region,
    subregion,
    capital,
    tld,
    borders = [],
    currencies,
    languages,
  } = country;

  const populationString = population?.toLocaleString() || "Unknown";
  const tldString = tld?.join(", ") || "None";
  const currency = currencies ? Object.values(currencies)[0]?.name : "None";
  const language = languages ? Object.values(languages).join(", ") : "None";

  return (
    <div className={`country-detail ${animateClass}`}>
      <button className="back-button" onClick={handleBackClick}>
        <i className="bi bi-arrow-left"></i>
        <span>Back</span>
      </button>

      <div className="detail-layout">
        <div className="flag-container">
          <img src={flag} alt={`Flag of ${name}`} className="detail-flag" />
        </div>

        <div className="detail-info">
          <h2>{name}</h2>

          <div className="info-columns">
            <div className="column">
              <p><strong>Native Name:</strong> {name}</p>
              <p><strong>Population:</strong> {populationString}</p>
              <p><strong>Region:</strong> {region}</p>
              <p><strong>Sub Region:</strong> {subregion}</p>
              <p><strong>Capital:</strong> {capital || "None"}</p>
            </div>

            <div className="column">
              <p><strong>Top Level Domain:</strong> {tldString}</p>
              <p><strong>Currencies:</strong> {currency}</p>
              <p><strong>Languages:</strong> {language}</p>
            </div>
          </div>

          <div className="borders">
            <strong>Border Countries:</strong>
            <div className="border-list">
              {borders.length ? (
                borders.map((borderCode) => (
                  <button
                    key={borderCode}
                    className="border-country-btn"
                    onClick={() => handleBorderClick(borderCode)}
                  >
                    {state.countryCodeToName[borderCode]}
                  </button>
                ))
              ) : (
                <span className="p-2 mt-1">None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
