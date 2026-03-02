export function setupThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  const themeStyle = document.getElementById("theme-style");
  const themeIcon = document.getElementById("theme-icon");

  if (!toggle || !themeStyle || !themeIcon) return;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "dark";
  themeStyle.href = savedTheme === "light" ? "/styles/style-light.css" : "/styles/style.css";
  themeIcon.classList.replace(savedTheme === "light" ? "fa-moon" : "fa-sun", savedTheme === "light" ? "fa-sun" : "fa-moon");

  toggle.addEventListener("click", () => {
    const current = themeStyle.getAttribute("href");
    if (current.endsWith("style.css")) {
      themeStyle.href = "/styles/style-light.css";
      themeIcon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "light");
    } else {
      themeStyle.href = "/styles/style.css";
      themeIcon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "dark");
    }
  });
}