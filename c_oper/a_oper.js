let int1 = 10;
let int2 = 20;
let int3 = "10";
let int4 = "15";

let int6 = int1 !== int4;

console.log(int1 == int3);
console.log(int1 === int3);
console.log(int6);

let number1 = 10;
let number2 = 20;

// 조건식은 반드시 값을 본다!
// condition 객체에 5보다  number1이 크다면 의 값을 넣음 true
let condition = number1 > 5,
  // , 을 사용함으로서 let변수식을 사용하여 여러개의 객체를생성한다는뜻
  // condition2 의 값은 number2 보다 10이 더 클때 의 값 false
  condition2 = number2 < 10,
  // condition3 의 값은 condition true 그리고 condition2 false 이기때문에 false이다
  // and 관계연산자에서는 둘중 하나라도 false면 false
  condition3 = condition || condition2;

// number1 이 5 보다 클때 또는 number2 가 10보다 작을때
// && or 관계연산자에서는 둘중 하나라도 true 라면 true 이다
// 그래서 true
console.log(number1 > 5 && number2 < 10);

console.log(number1 > 5 || number2 < 10);

console.log(5 && number2 < 10);
console.log(number1 > 5 || number2 < 10);

// 삼항 연산자
let score1 = 10;
let socre2 = 11;

let result = score1 > socre2 ? score1 : socre2;
// +
// 1. 숫자끼리 사용하면 연산!
// 2. 문자열이 포함되어 있으면 연결!
console.log("더 큰 값 :" + result);

// 두 정수를 변수에 담고,
// 삼항 연산자로 대소비교를 한다.
// 단, 두 수가 같을 떄에는 알맞는 메세지를 출력한다.

// let number = 10;
// let number2 = 20;

// let result = number >= number2 ? "같습니다" : "다릅니다.";

// console.log(result);

// let number1 = 11;
// let number2 = 10;
// let condition1 = number1 > number2;
// let condition2 = number1 == number2;
// let equalMessage = "두 수가 같습니다.";
// let result = condition1 ? number1 : condition2 ? equalMessage : number2;

// console.log(result);
