function greet() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("result").innerText =
    "Hello " + name + "! Welcome to Crown & Code.";
}