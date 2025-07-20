import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./CountryCard.css";

function CountryCard({ country }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${country.cca3}`); 
  };

  const { name, flags, population, region, capital } = country;

  return (
    <div
      className="country-card"
      onClick={handleClick}
      role="button"
    >
      <img
        src={flags.png}
        alt={`Flag of ${name.common}`}
        className="country-flag"
      />
      <div className="country-info">
        <h3>{name.common}</h3>
        <p><strong>Population:</strong> {population.toLocaleString()}</p>
        <p><strong>Region:</strong> {region}</p>
        {capital && <p><strong>Capital:</strong> {capital}</p>}
      </div>
    </div>
  );
}

export default CountryCard;
