// src/components/theme-toggle.js
export function setupThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  const themeStyle = document.getElementById("theme-style");
  const themeIcon = document.getElementById("theme-icon");

  if (!toggle || !themeStyle || !themeIcon) return;

  const base = import.meta.env.BASE_URL; // dynamic base path

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "dark";
  themeStyle.href = savedTheme === "light" ? `${base}styles/style-light.css` : `${base}styles/style.css`;
  themeIcon.classList.replace(
    savedTheme === "light" ? "fa-moon" : "fa-sun",
    savedTheme === "light" ? "fa-sun" : "fa-moon"
  );

  toggle.addEventListener("click", () => {
    const current = themeStyle.getAttribute("href");
    if (current.endsWith("style.css")) {
      themeStyle.href = `${base}styles/style-light.css`;
      themeIcon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "light");
    } else {
      themeStyle.href = `${base}styles/style.css`;
      themeIcon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "dark");
    }
  });
}