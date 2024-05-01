// Get the menu and buttons
const menu = document.getElementById("menu");
const openMenuBtn = document.getElementById("openMenu");
const closeMenuBtn = document.getElementById("closeMenu");

// Event listener for opening the menu
openMenuBtn.addEventListener("click", function () {
  menu.style.display = "block";
});

// Event listener for closing the menu
closeMenuBtn.addEventListener("click", function () {
  menu.style.display = "none";
});
