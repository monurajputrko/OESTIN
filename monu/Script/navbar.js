// JavaScript to toggle the mobile menu
const mobileMenu = document.getElementById("mobile");
const navbar = document.getElementById("navbar");
const closeIcon = document.getElementById("close");

mobileMenu.addEventListener("click", () => {
  navbar.style.right = "0";
  closeIcon.style.display = "initial";
});

closeIcon.addEventListener("click", () => {
  navbar.style.right = "-300px"; // Adjust this value to match the menu width
  closeIcon.style.display = "none";
});
