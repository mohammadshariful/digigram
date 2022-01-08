"use strict";
// selector
const navLinks = document.querySelector(".nav-links");
const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-times");

// functionalities

//for-open Menu
/*
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
*/
// toggle function
function toggle(stateNone, pixel, stateBlock) {
  openMenu.style.display = stateNone;
  closeMenu.style.display = stateBlock;
  navLinks.style.right = pixel;
}

openMenu.addEventListener("click", () => toggle("none", 0, "block"));

closeMenu.addEventListener("click", () => toggle("block", "-200px", "none"));

/*
function toggle(state, size) {
  state === "block"
    ? (openMenu.style.display = state)
    : (closeMenu.display = "none");
  navLinks.style.right = size + "px";
}
*/

//counters
const counters = document.querySelectorAll(".count");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const increase = target / 2000;

    const c = +counter.innerText;
    if (c < target) {
      counter.innerText = Math.ceil(c + increase);
      setInterval(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
