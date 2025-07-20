import React from "react";
import "./Search.css";

function Search({ value, onChange }) {
  return (
    <div className="search-box">
      <i className="bi bi-search search-icon"></i>
      <input
        type="text"
        className="search-input"
        placeholder="Search for a country..."
        value={value}
        onChange={onChange}
        aria-label="Search for a country"
      />
    </div>
  );
}

export default Search;
