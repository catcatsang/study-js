// false를 의미하는 값들
// 0, "", null, undefined

// 두 정수의 덧셈
// const add = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 + number2);
//         return;
//     }

//     return number1 + number2;
// };

// let result = add(1, 3);
// console.log(result);

// add(1, 3, (result) => {
//     console.log(result);
// });

// add(1, 3, console.log);

// 1.두 정수의 곱셈
const multiply = (number1, number2, callback) => {
  let result = number1 * number2;

  if (callback) {
    callback(result);
  }
  return result;
};

// 2. 2를 곱해서 출력
const printResult = (result) => {
  console.log(result * 2);
};

// multiply(3, 5, printResult);
let result = multiply(3, 5);
console.log(result);

// 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님" 출력

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력

// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총합 수와 각각 비교해 가축 중 수가 적은 쪽을 출력

// 학생의 국어, 영어, 수학 점수를 전달받아서 평균을 구한 뒤
// 60점일 경우 합격, 아니면 불합격

// 1 ~ n까지 합을 구한 뒤 5000이상이면 5000을 빼고 출력

// n ~ m에서 첫 번째로 짝수인 숫자를 찾고, 그 숫자가 10 이상이면 true 아니면 false

// 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5이상 50이상이면 true
// 하나라도 false라면 false
