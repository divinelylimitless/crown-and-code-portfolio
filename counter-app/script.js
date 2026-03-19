let count = 0;

function updateDisplay() {
  const countElement = document.getElementById("count");
  countElement.innerText = count;

  if (count > 0) {
    countElement.style.color = "green";
  } else if (count < 0) {
    countElement.style.color = "red";
  } else {
    countElement.style.color = "white";
  }
}

function increaseCount() {
  count++;
  updateDisplay();
}

function decreaseCount() {
  count--;
  updateDisplay();
}

function resetCount() {
  count = 0;
  updateDisplay();
}