const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");

checkbox.addEventListener("click", () => {
  const isDarkTheme = checkbox.checked;
  isDarkTheme ? html.classList.add("dark") : html.classList.remove("dark");
  localStorage.setItem("dark-theme", isDarkTheme);
});

document.addEventListener("DOMContentLoaded", () => {
  const isDarkTheme = localStorage.getItem("dark-theme");

  if (isDarkTheme === "true") {
    html.classList.add("dark");
    checkbox.checked = true;
  }
});
