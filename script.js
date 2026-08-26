const themeToggle = document.getElementById("themeToggle");
const currentYear = document.getElementById("year");
const projectDetailButtons = document.querySelectorAll(".view-details-btn");

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

// Toggle project details panels
projectDetailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const detailsId = button.getAttribute("aria-controls");
    const detailsPanel = detailsId ? document.getElementById(detailsId) : null;

    if (!detailsPanel) {
      return;
    }

    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    button.textContent = isExpanded ? "View Details" : "Hide Details";
    detailsPanel.hidden = isExpanded;
  });
});
