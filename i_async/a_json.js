const user = {
  id: 1,
  email: "hds1234@naver.com",
  password: "1234",
};

console.log(user);
console.log(JSON.stringify(user));

const data = JSON.stringify(user); // 데이터를 보낼때때
const obj = JSON.parse(data); // 데이터를 받을때때

console.log(obj.email);
