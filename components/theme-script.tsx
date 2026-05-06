import { THEME_STORAGE_KEY } from "@/lib/theme";

/**
 * Runs before hydration to keep theme in sync with localStorage/system preference.
 * Applies `dark` on <html> only — avoids nested containers ignoring the toggle.
 */
const themeInitSnippet = `
(function () {
  var KEY = "${THEME_STORAGE_KEY}";
  try {
    var stored = localStorage.getItem(KEY);
    var prefersDark =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark =
      stored === "dark" || (stored !== "light" && prefersDark);
    var root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
  } catch (_) {}
})();
`;

export function ThemeScript() {
  return (
    <script id="portfolio-theme-init" dangerouslySetInnerHTML={{ __html: themeInitSnippet }} />
  );
}
