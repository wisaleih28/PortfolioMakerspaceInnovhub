/** Key used only for explicit user choice (light vs dark). System preference applies when absent. */
export const THEME_STORAGE_KEY = "portfolio-theme";

export type StoredThemePreference = "light" | "dark";

export function getStoredThemePreference(): StoredThemePreference | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    if (raw === "light" || raw === "dark") return raw;
    return null;
  } catch {
    return null;
  }
}

export function setStoredThemePreference(value: StoredThemePreference): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, value);
  } catch {
    /* ignore quota / privacy mode */
  }
}
