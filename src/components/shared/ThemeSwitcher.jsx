"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <FiMoon className="text-sizzlingred w-6 h-6" />
      ) : (
        <FiSun className="text-culturedwhite w-6 h-6" />
      )}
    </button>
  );
}
