const check = document.getElementById("weatherapp-btn");
const check1 = document.getElementById("DJSNOVA-btn");
const check2 = document.getElementById("DJSCOMPUTE-btn");
const check3 = document.getElementById("FlipGame-btn");
const check4 = document.getElementById("insta");
const check5 = document.getElementById("linkedin")
const check6 = document.getElementById("github");
// Hamburger menu toggle
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const navLinks = document.querySelector(".Elements");

// Open menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.add("active");
});

// Close menu
closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
});

// Close menu when clicking a link
document.querySelectorAll(".Elements a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

check.addEventListener("click",()=>{
    window.open("https://siddharth587.github.io/Weather-app/");
});
check1.addEventListener("click",()=>{
  window.open("https://siddharth587.github.io/Djs-Nova-Task/");
});
check2.addEventListener("click",()=>{
window.open("https://siddharth587.github.io/Djs-Compute-tasks/");
});
check3.addEventListener("click",()=>{
 alert("Under Devlopment :) Coming Soon");
});
check4.addEventListener("click",()=>{[
window.open("https://www.instagram.com/2305.siddharth/")
]});
check5.addEventListener("click",()=>{
window.open("https://www.linkedin.com/in/siddharth-tiwari-85689a243/")
});
check6.addEventListener("click",()=>{
window.open("https://github.com/siddharth587")
});