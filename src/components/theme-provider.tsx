import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

type Theme = "dark" | "light";

// Every mounted useTheme() (e.g. desktop + mobile toggles) subscribes here,
// so one toggle updates all of them.
const listeners = new Set<(theme: Theme) => void>();

const readDomTheme = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

export function useTheme() {
  // Same value on the server and the first client render; the real theme is
  // read from <html> in the effect below to avoid a hydration mismatch.
  const [resolvedTheme, setResolvedTheme] = useState<Theme>("dark");

  useEffect(() => {
    setResolvedTheme(readDomTheme());
    listeners.add(setResolvedTheme);
    return () => {
      listeners.delete(setResolvedTheme);
    };
  }, []);

  const toggleTheme = () => {
    const next: Theme = readDomTheme() === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    listeners.forEach((notify) => notify(next));
  };

  return { resolvedTheme, toggleTheme };
}
