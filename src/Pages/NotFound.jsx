import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import NotFoundImage from "../assets/404.svg"; 

function NotFound() {
  return (
    <div className="not-found-container">
      <img src={NotFoundImage} alt="404 Not Found" className="not-found-img" />
      <p className="not-found-text">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="not-found-link">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
