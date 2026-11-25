"use client";

import { IconMoon, IconSun } from "./icons";

// The initial theme is set before first paint by the inline script in the layout
// (saved choice, else the system setting). This button only flips and remembers it.
// The accessible name switches with the theme through CSS (display:none removes the
// other label from the accessibility tree), so server and client markup always match.
export function ThemeToggle({ toDark, toLight }: { toDark: string; toLight: string }) {
  function flip() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable: the choice lasts for this page view */
    }
  }

  return (
    <button type="button" className="btn btn-quiet theme-toggle" onClick={flip}>
      <IconMoon className="icon-moon" />
      <IconSun className="icon-sun" />
      <span className="visually-hidden label-to-dark">{toDark}</span>
      <span className="visually-hidden label-to-light">{toLight}</span>
    </button>
  );
}
