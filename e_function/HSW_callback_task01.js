//배열의 각 숫자에 2를 더한 값을 반환하는 콜백 함수를 작성하세요.
function addtwo(num1, num2, num3, callback) {
  const arr = new Array(num1, num2, num3);
  result = arr.map((data, i) => data + 2);
  if (callback) {
    return callback(result);
  }
  return;
}

function addprint(result) {
  console.log(result);
}

addtwo(1, 2, 3, addprint);
