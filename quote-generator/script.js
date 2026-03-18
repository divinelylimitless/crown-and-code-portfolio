const quotes = [
  "You are building something bigger than this moment.",
  "Stay focused. Your future is watching.",
  "You don’t need permission to elevate.",
  "Discipline creates freedom.",
  "Your consistency is your power."
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}