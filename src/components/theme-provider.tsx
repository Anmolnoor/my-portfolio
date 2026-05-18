import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

type Theme = "dark" | "light";

const getInitialTheme = (): Theme => {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

export function useTheme() {
  const [resolvedTheme, setResolvedTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    setResolvedTheme(getInitialTheme());
  }, []);

  const toggleTheme = () => {
    const next: Theme = resolvedTheme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    setResolvedTheme(next);
  };

  return { resolvedTheme, toggleTheme };
}
