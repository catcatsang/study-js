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
// const multiply = (number1, number2, callback) => {
//   let result = number1 * number2;

//   if (callback) {
//     callback(result);
//   }
//   return result;

// 2. 2를 곱해서 출력
// const printResult = (result) => {
//   console.log(result * 2);
// };

// // multiply(3, 5, printResult);
// let result = multiply(3, 5);
// console.log(result);

// 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님" 출력
// function nameparts(first, name, callback) {
//   let fullname = first + name;
//   callback(fullname);
// }

// function perfectname(fullname) {
//   console.log(fullname, `님`);
// }
// nameparts(`허`,`세웅`,perfectname)

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴
// function price(item, allprice, callback) {

//   let stuff = allprice/item;
//  return callback(stuff);
// }

// function total(stuff) {
//   return stuff <=5 ? true : false
// };

// total(500,10000,total)
// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력

// function pay (item, callback) {
//   let paytime = true;
//     callback(paytime)
// }

// function paystatus(paytime) {
//   paytime = true ? console.log(`결제 완료`) : console.log(`결제취소`)
// }

// pay(500,paystatus)

// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총합 수와 각각 비교해 가축 중 수가 적은 쪽을 출력

// function farm(pig, cow, callback) {
//   let clean_Area = pig < cow ? pig : cow;

//   callback(clean_Area);
// }

// function cleanarea(clean_Area) {
//   console.log(clean_Area);
// }

// farm(21, 30, cleanarea);

// 학생의 국어, 영어, 수학 점수를 전달받아서 평균을 구한 뒤
// 60점일 경우 합격, 아니면 불합격
// const result = (kor, eng, math, callback) => {
//   let avg = kor + eng + math / 3;
//   let avgresult = avg < 60 ? `합격` : `불합격`;
//   if (callback) {
//     callback(avgresult);
//   }
//   return avg;
// };

// function resultinfo(avgresult) {
//   console.log(avgresult);
// }

// result(40, 40, 40, resultinfo);

// 1 ~ n까지 합을 구한 뒤 5000이상이면 5000을 빼고 출력
// const arithmetic = (n, callback) => {
//   let arithmetic_serise = 0;
//   for (let i = 0; i < n; i++) {
//     arithmetic_serise += i;
//   }
//   if (callback) callback(arithmetic_serise);
// };

// function print(arithmetic_serise) {
//   if (arithmetic_serise < 5000) {
//     console.log(`${arithmetic_serise - 5000}`);
//   } else {
//     console.log(arithmetic_serise);
//   }
// }

// arithmetic(40, print);
// n ~ m에서 첫 번째로 짝수인 숫자를 찾고, 그 숫자가 10 이상이면 true 아니면 false
const evennumber = (n, m, callback) => {
  for (let i = n; i < m; i++) {
    if (i % 2 === 0) {
      callback(i);

      break;
    } else {
      `null`;
    }
  }
};

const print = (i) => {
  console.log(i >= 10 ? true : false);
};

evennumber(10, 15, print);

// 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5이상 50이하이면 true
// 하나라도 false라면 false
