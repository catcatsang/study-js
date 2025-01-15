const firstBanner = document.createElement("div");
const lastBanner = document.createElement("div");
const Banner = document.querySelector(".main-banner");
const mainBanner = document.querySelector("div.main-banner");
const buttons = document.querySelectorAll(".main-banner-point");
let count = 1;
let tempbutton = buttons[0];
firstBanner.innerHTML = `<img
                  src="image/banner1.png"
                  alt="affiliate"
                />`;

lastBanner.innerHTML = `<img
                  src="image/banner1.png"
                  alt=""
                />`;

mainBanner.appendChild(firstBanner);
mainBanner.prepend(lastBanner);

Banner.style.transform = `translateX(-1500px)`;

let gazeAdmin = 0; // 버튼 채워지는 효과를 관리하게될 변수

// 버튼에 색을 초기화 하는함수
const formatgaze = () => {
  buttons.forEach((button) => {
    button.style.background = "rgba(115, 114, 114, 0.1)";
    button.style.width = "8px";
  });
};

//게이지 채우기 함수
const fillgaze = (button) => {
  let fill = 0;
  gazeAdmin = setInterval(() => {
    fill += 3;
    button.style.width = `${fill}px`;
    if (fill >= 54) {
      clearInterval(gazeAdmin);
    }
  }, 100);
};

const autoSlide = () => {
  count++;
  Banner.style.transform = `translate(-${1500 * count}px)`;

  Banner.style.transition = `transform 1.0s`;

  if (count === 4) {
    setTimeout(() => {
      Banner.style.transform = `translate(-1500px)`;
      Banner.style.transition = `transform 0s`;
    }, 1000);
    count = 1;
  }

  formatgaze();
  tempbutton.style.background = "rgba(115, 114, 114, 0.1)";
  fillgaze(buttons[count - 1]);
  buttons[count - 1].style.background = "black";

  tempbutton = buttons[count - 1];
};

let autoSlideInterval = setInterval(autoSlide, 2000);
let buttonCheck = true;

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    if (!buttonCheck) {
      return;
    }

    buttonCheck = false;

    clearInterval(autoSlideInterval);
    clearInterval(gazeAdmin);

    tempbutton.style.background = "rgba(115, 114, 114, 0.1)";
    formatgaze();
    count = i + 1;

    Banner.style.transform = `translate(-${1500 * count}px)`;
    Banner.style.transition = `transform 0.5s`;

    fillgaze(button[i]);
    buttons[i].style.background = "black";
    tempbutton = buttons[i];

    autoSlideInterval = setInterval(autoSlide, 2000);

    setTimeout(() => {
      buttonCheck = true;
    }, 1000);
  });
});

const filmMain = document.querySelector("film-main");
