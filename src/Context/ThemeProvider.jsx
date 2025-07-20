import React, { createContext, useContext, useState, useLayoutEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(getInitialTheme);

  function getInitialTheme() {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function applyTheme(darkMode) {
    const body = document.body;
    body.classList.toggle("dark-mode", darkMode);
    body.style.backgroundColor = darkMode
      ? "hsl(207, 26%, 17%)"
      : "hsl(0, 0%, 98%)";
  }

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  // Apply theme  on load and whenever `isDark` changes
  useLayoutEffect(() => {
    applyTheme(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
