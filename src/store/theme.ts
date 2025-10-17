import { createEffect, createStore } from "@lucid/index.ts";
import { listenSystemTheme, switchTheme } from "@theme/theme.ts";

export type ThemeMode = "auto" | "light" | "dark";

type ThemeState = {
  mode: ThemeMode;
  set(mode: ThemeMode): void;
  toggle(): void;
};

export const themeStore = createStore<ThemeState>(
  (set, get) => {
    const initial = "auto";
    const api: ThemeState = {
      mode: initial,
      set: (mode) => set({ mode }),
      toggle: () => {
        const currentMode = get().mode;
        const next: ThemeMode = currentMode === "dark" ? "light" : "dark";
        set({ mode: next });
      },
    };
    return api;
  },
);

const modeSel = themeStore.select((s) => s.mode);
createEffect(() => {
  const m = modeSel();
  switchTheme(m);
});

listenSystemTheme((_theme) => {
  const currentMode = themeStore.getState().mode;
  if (currentMode === "auto") {
    switchTheme("auto");
  }
});
