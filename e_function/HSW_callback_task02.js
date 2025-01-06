//배열에서 짝수만 반환하는 콜백 함수를 작성하세요.
const even = (num1, num2, num3, num4, num5, callback) => {
  const arr = [num1, num2, num3, num4, num5];
  const result = arr.filter((data, i) => data % 2 === 0);
  callback(result);
};

const print = (result) => {
  console.log(result);
};

even(1, 2, 3, 4, 5, print);
