let number1 = 11;
let number2 = 10;
let condition1 = number1 > number2;
let condition2 = number1 === number2;
let equalMessage = "두 수가 같습니다.";

if (number1 > number2) {
  console.log(`더 큰 값 : ${number1}`);
} else if (number1 !== number2) {
  console.log(`더 큰 값: ${number2}`);
} else {
  console.log(`두 수가 같습니다.`);
}

// if (condition1) {
//   resultMessage = condition1Message;
// } else if (condition2) {
//   resultMessage = condition2Message;
// } else {
//   resultMessage = equalMessage;
// }

// // 일괄 처리
// console.log(resultMessage);
