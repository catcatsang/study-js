const MESSAGE = `당신의 혈액형은?
/ 1. A
 2. B
 3. O
 4. AB`;

const A_MESSAGE = "꼼꼼하고 세심하다.";
const B_MESSAGE = "추진력이 좋다.";
const O_MESSAGE = "사교성이 좋다.";
const AB_MESSAGE = "착하다.";
const ERROR_MESSAGE = "다시 시도해주세요.";

let choice = 3;
let result = null;

if (choice == 1) {
  console.log(A_MESSAGE);
} else if (choice == 2) {
  console.log(B_MESSAGE_MESSAGE);
} else if (choice == 3) {
  console.log(O_MESSAGE_MESSAGE_MESSAGE);
} else if (choice == 4) {
  console.log(AB_MESSAGE_MESSAGE);
} else {
  console.log(ERROR_MESSAGE);
}
