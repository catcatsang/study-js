// 함수와 메소드
// 함수는 어떤 영역에도 갇혀있지 않은 상태로 선언된 형태
// 메소드는 어떤 영역 내에 갇혀있는 상태로 선언된 형태

// let user = {
//     // 프로퍼티 선언
//     name: "한동석",
//     age: 20,
//     address: "경기도",
//     introduce: () => {
//         console.log("Hi ~!");
//     },
// };

// 1. 마침표로 접근
// console.log(typeof user);  object 뜸뜸
// console.log(user.name);    "한동석"
// user.introduce();          Hi~~

// 2. 대괄호로 접근
// const p = {
//     "data-x": "text-container",
// };

// console.log(p["data-x"]);

// 기초 실습
// 회원 객체를 선언한다.
// 프로퍼티는 다음과 같다.
// 이름, 주소1, 주소2, 주소3
// 객체를 선언하고 각 값을 원하는 값으로 넣어서
// 모든 프로퍼티를 출력해본다.

const user = {
  name: "한동석", //프로퍼티 name 생성성
  address1: "서울", //프로퍼티 address1 서울 생성성
  address2: "강남구", // 프로퍼티 addres2 생성
  address3: "역삼동", // 프로퍼티 adress3 생성성
  printAddress: () => {
    // 매서드 printAddress 생성성
    for (let i = 0; i < 3; i++) {
      // 내부의 프로퍼티에 접근할 때에도 반드시 객체명을 붙여준다.
      console.log(user[`address${i + 1}`]); // address
    }
  },
};

// for (let i = 0; i < 3; i++) {
//     console.log(user[`address${i + 1}`]);
// }

// 객체의 기본값은 null
// user.printAddress();
// console.log(user); // 객체 전체 내용확인,
