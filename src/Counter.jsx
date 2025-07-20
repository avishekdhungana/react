import React, { useState } from "react";

export default function ThemeToggle() {
  
  const [theme, setTheme] = useState("light");

  // function to toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "20px",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <h1>The current theme is: {theme}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "dark" ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
}
