import React from "react";
import "./Shimmer.css";

function Shimmer() {
  return (
    <div className="container shimmer-container">
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-inner"></div>
        </div>
      ))}
    </div>
  );
}

export default Shimmer;
