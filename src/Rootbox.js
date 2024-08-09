import React, { useEffect, useState } from "react";
import Header from "./items/Header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./items/Hook";

const Rootbox = () => {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default Rootbox;
