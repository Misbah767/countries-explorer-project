import React from "react";
import { useTheme } from "../../Context/ThemeProvider";

import "./Toggle.css";

function Toggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <i className={isDark ? "bi bi-sun" : "bi bi-moon"}></i>
      {isDark ? " Light Mode" : " Dark Mode"}
    </button>
  );
}

export default Toggle;
