export type ThemeMode = "auto" | "light" | "dark";

export const THEME_STORAGE_KEY = "app.theme.mode";

export function switchTheme(mode: ThemeMode) {
  const html = document.documentElement;

  if (mode === "auto") {
    html.removeAttribute("data-theme");
    html.classList.remove("dark");

    const prefersDark =
      globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      html.classList.add("dark");
    }
  } else if (mode === "dark") {
    html.classList.add("dark");
    html.removeAttribute("data-theme");
  } else {
    html.classList.remove("dark");
    html.removeAttribute("data-theme");
  }
}

export function getSavedTheme(): ThemeMode | null {
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
    return v ?? null;
  } catch {
    return null;
  }
}

export function getEffectiveTheme(): ThemeMode {
  const html = document.documentElement;

  if (html.classList.contains("dark")) {
    const saved = getSavedTheme();
    if (saved === "dark") return "dark";
  }

  const saved = getSavedTheme();
  if (saved && saved !== "auto") return saved;

  const prefersDark =
    globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function listenThemeStorage() {
  globalThis.addEventListener("storage", (ev) => {
    if (ev.key === THEME_STORAGE_KEY) {
      const saved = getSavedTheme();
      switchTheme(saved ?? "auto");
    }
  });
}

export function listenSystemTheme(onThemeChange: (theme: ThemeMode) => void) {
  const mediaQuery = globalThis.matchMedia("(prefers-color-scheme: dark)");

  const handleChange = () => {
    onThemeChange("auto");
  };

  mediaQuery.addEventListener("change", handleChange);

  return () => {
    mediaQuery.removeEventListener("change", handleChange);
  };
}
