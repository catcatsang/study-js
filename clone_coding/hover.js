const curmers = document.querySelector("#curmers");
const curmersMenu = document.querySelector("#curmersMenu");
const closepage = document.querySelector("body");
console.log(curmers);
console.log(curmersMenu);

curmers.addEventListener("mouseenter", () => {
  curmersMenu.style.display = "flex";
});

curmers.addEventListener("mouseleave", () => {
  curmersMenu.style.display = "none";
});

const ys = document.querySelector("#ys");
const ysmenu = document.querySelector("#ysmenu");
ys.addEventListener("mouseenter", () => {
  ysmenu.style.display = "flex";
});

ys.addEventListener("mouseleave", () => {
  ysmenu.style.display = "none";
});

const enter = document.querySelector("#enter");
const entermenu = document.querySelector("#entermenu");
enter.addEventListener("mouseenter", () => {
  enter.style.display = "flex";
});

entermenu.addEventListener("mouseleave", () => {
  entermenu.style.display = "none";
  w;
});
