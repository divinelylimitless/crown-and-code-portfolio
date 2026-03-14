function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const button = document.querySelector(".nav button");

  if (document.body.classList.contains("dark-mode")) {
    button.textContent = "☀️";
  } else {
    button.textContent = "🌙";
  }
}