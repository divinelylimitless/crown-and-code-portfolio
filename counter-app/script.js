let count = 0;
const max = 10;
const min = -10;

function updateDisplay() {
  const countElement = document.getElementById("count");
  const message = document.getElementById("message");

  countElement.innerText = count;

  // Colour logic
  if (count > 0) {
    countElement.style.color = "green";
  } else if (count < 0) {
    countElement.style.color = "red";
  } else {
    countElement.style.color = "white";
  }

  // Limit message
  if (count === max) {
    message.innerText = "Maximum reached";
  } else if (count === min) {
    message.innerText = "Minimum reached";
  } else {
    message.innerText = "";
  }

  // Animation
  countElement.classList.add("pop");
  setTimeout(() => {
    countElement.classList.remove("pop");
  }, 150);
}

function increaseCount() {
  if (count < max) {
    count++;
    updateDisplay();
  }
}

function decreaseCount() {
  if (count > min) {
    count--;
    updateDisplay();
  }
}

function resetCount() {
  count = 0;
  updateDisplay();
}