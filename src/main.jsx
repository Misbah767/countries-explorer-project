import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./Context/ThemeProvider";
import { CountriesProvider } from "./Context/CountriesProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CountriesProvider>
          <App />
        </CountriesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
