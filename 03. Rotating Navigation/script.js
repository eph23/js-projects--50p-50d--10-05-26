"use strict";

const open = document.querySelector("#open");
const close = document.querySelector("#close");
const container = document.querySelector(".container");
const circle = document.querySelector(".circle");

open.addEventListener("click", () => {
    container.classList.add("show-nav");
    circle.style.transform = "rotate(-90deg)";
});
close.addEventListener("click", () => {
    circle.style.transform = "rotate(0deg)";
    container.classList.remove("show-nav");
});
