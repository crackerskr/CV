const toggle = document.getElementById("theme-toggle");
const themeStyle = document.getElementById("theme-style");
const themeIcon = document.getElementById("theme-icon");

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme") || "dark";

if (savedTheme === "light") {
  themeStyle.setAttribute("href", "./styles/style-light.css");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
} else {
  themeStyle.setAttribute("href", "./styles/style.css");
  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
}

// Toggle theme on button click
toggle.addEventListener("click", () => {
  if (themeStyle.getAttribute("href") === "./styles/style.css") {
    themeStyle.setAttribute("href", "./styles/style-light.css");
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    themeStyle.setAttribute("href", "./styles/style.css");
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  }
});