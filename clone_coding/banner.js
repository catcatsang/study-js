const Banner = document.getElementByClassName("banner");
const arrow = document.getElementsByClassName("");

let count = 1;
let tempbutton = buttons[0];
firstBanner.innerHTML = `<img
                  src="https://img.echosting.cafe24.com/ec/shop_kr/v2/youtubeshopping/affiliate/img_affili_main.png"
                  alt="affiliate"
                />`;

lastBanner.innerHTML = `<img
                  src="https://img.echosting.cafe24.com/ec/shop_kr/v2/main/img_visual_pro.png"
                  alt=""
                />`;
Banner.appendChild(firstBanner);
Banner.prepend(lastBanner);
Banner.style.transform = `translate(-500px)`;

const autoSlide = () => {
  count++;
  Banner.style.transform = `translate(-${500 * count}px)`;
  Banner.style.transition = `transform 0.5s`;
};
