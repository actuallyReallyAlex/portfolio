import React, { useEffect, useState } from "react";

const themes = [
  { name: "dark", particleColor: "#ffeded" },
  { name: "light", particleColor: "#000000" },
];

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
    (window as any).particleColor = theme.particleColor;
    (window as any).particlesCount = 2000; // TODO - Particle count slider
    (window as any).removeParticles();
    (window as any).createParticles();
  }, [theme]);

  return (
    <button id="theme-toggle" onClick={handleToggle}>
      /{theme.name}
    </button>
  );
};

export default ThemeToggle;
