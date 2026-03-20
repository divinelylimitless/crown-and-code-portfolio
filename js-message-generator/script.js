const messages = [
"Every line of code builds your future.",
"You are building your tech empire.",
"Small progress is still powerful progress.",
"Calm focus creates strong skills.",
"Crown & Code builders keep going."
];

function newMessage() {
const randomNumber = Math.floor(Math.random() * messages.length);
document.getElementById("message").innerText = messages[randomNumber];
}