const button = document.querySelector(".btnWaffle");
const subMenu = document.getElementById("test1");
const anyclose = document.querySelector("body");

let menuvisible = false;

button.addEventListener("click", (e) => {
  if (!menuvisible) {
    subMenu.style.display = "flex";
    menuvisible = true;
    console.log("click");
  } else {
    subMenu.style.display = "none";
    console.log("click off");
    menuvisible = false;
  }
});

// anyclose.addEventListener("click", () => {
//   pages.style.visibility = "hidden";
//   pages.style.opacity = "0";
// });
