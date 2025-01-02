// 출력 예)
// 당신의 혈액형은?
// 1. A
// 2. B
// 3. O
// 4. AB

// 선택 값 예시)
// 1
//
// 출력 예)
// 꼼꼼하고 세심하다.
//

// 사용자가 선택한 혈액형의 메세지는 다음과 같다.
// A: 꼼꼼하고 세심하다.
// B: 추진력이 좋다.
// O: 사교성이 좋다.
// AB: 착하다.

const MESSAGE = `당신의 혈액형은?
1. A
2. B
3. C 
4. AB`;

let blooduser = 3;

let result =
  blooduser == 1 || blooduser < 2
    ? "A : 꼼꼼하고 세심하다"
    : blooduser == 2 || blooduser < 3
    ? "b"
    : blooduser == 3
    ? o
    : blooduser == 4
    ? "AB착하다"
    : "다시 시도해주세요.";
console.log(result);
