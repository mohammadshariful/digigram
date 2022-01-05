"use strict";
// selector
const navLinks = document.querySelector(".nav-links");
const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-times");

// functionalities

//for-open Menu
openMenu.addEventListener("click", function () {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  navLinks.style.right = "0";
});

//for-close Menu
closeMenu.addEventListener("click", function () {
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  navLinks.style.right = "-200px";
});
