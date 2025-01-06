//숫자 배열이 주어졌을 때, 배열 내의 최대값과 최소값을 구하여 그 차이를 반환하는 함수를 작성하세요.
function findmaxorlow() {
  const score = new Array(4, 8, 18, 33, 41, 42); // 랜덤한 숫자의 배열
  let max = score[0];
  let min = score[0];
  for (let i = 0; i < score.length; i++) {
    if (score[i] > max) {
      max = score[i];
    }
  }
  for (let i = 0; i < score.length; i++) {
    if (score[i] > max) {
      min = score[i];
    }
  }
  return max - min;
}
console.log(findmaxorlow());
