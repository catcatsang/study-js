let data = 10;

// 출력 함수 (이름뒤에 소괄호가 있으면 함수)
// data의 값을 출력하는 함수
// data 의 값은 10 이므로 10 출력
console.log(data);

// 선언된 data 라는 변수 값이 20으로 바뀐건가.?
data = 20;
// data의 값이 20으로 바뀌었으니 20으로 출력이됨.
console.log(data);

// 정수값이 들어있기 떄문에 자료형은 number이다.
//typeof는 변수안에있는 타입을 확인해주는 연산자이다.
//그러하므로 data의 값은 20 이기때문에 number 입니다.
console.log(typeof data);

// data를 ""를 붙임으로써 안녕이라는 문자열이 됩니다.
data = "안녕";

// 프로그램은 소스코드를 적어 소스파일을 컴파일하는데,
// 위에서 아래로 왼쪽에서 오른쪽으로,순차적 흐름, 절차적 프로그래밍 이라고한다.
// 그렇기때문에 현재 data의 type of는 위에서 data가 "안녕"으로 바뀌었기떄문에
// type of 연산자를 사용해서 String 결과값이 나오게된다.
console.log(typeof data);
