// Grab elements
const btn = document.getElementById("actionBtn");
const message = document.getElementById("message");

// Add event listener
btn.addEventListener("click", () => {
  message.textContent = "You clicked the button! 🎉";
});
