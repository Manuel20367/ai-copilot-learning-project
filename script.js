const themeToggle = document.getElementById("themeToggle");
const currentYear = document.getElementById("year");

// Show current year in footer
currentYear.textContent = new Date().getFullYear();

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️ Light Mode";
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});
