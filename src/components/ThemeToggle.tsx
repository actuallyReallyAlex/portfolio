import React, { useEffect, useState } from "react";

const themes = [{ name: "dark" }, { name: "light" }];

export const ThemeToggle = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  const handleToggle = () => {
    if (themeIndex === themes.length - 1) {
      setThemeIndex(0);
      return;
    }

    setThemeIndex(themeIndex + 1);
  };


  const theme = themes[themeIndex];

  useEffect(() => {
      document.body.classList.value = theme.name;
  }, [theme])


  return <button id="theme-toggle" onClick={handleToggle}>/{theme.name}</button>;
};

export default ThemeToggle;
