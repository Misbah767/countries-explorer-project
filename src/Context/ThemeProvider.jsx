import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const body = document.body;

    // Apply dark or light mode styles
    if (isDark) {
      body.classList.add("dark-mode");
      body.style.backgroundColor = "hsl(207, 26%, 17%)";
    } else {
      body.classList.remove("dark-mode");
      body.style.backgroundColor = "hsl(0, 0%, 98%)";
    }

    // Save theme preference
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
