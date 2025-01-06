// 마켓에서 판매하는 상품은 단 1개이다.
// 이름, 상품명, 가격, 재고
// 판매하기: 고객마다 쿠폰 할인율이 다르다.
//          구매한 고객의 쿠폰 할인율을 적용해서 판매한다.

// 고객 객체를 2개 정의한다.
// 이름, 잔고, 쿠폰 할인율

// 고객 2명은 서로 할인율을 다르게 설정한다.

const item = {
  name: "상품품",
  "item-1": "맹고",
  price: 1200,
  stock: 2,

  salesell: () => {
    // for 문 적용을 해서 customer 숫자를 어떻게바꾸지지
    if ((coupon = true)) {
      let sale = price - coupon;
      acc -= sale;
    }
  },
};

const customer1 = {
  name: "LMB",
  acc: 12000,
  couponsale: 60,
};

const customer2 = {
  name: "LSGs",
  acc: 15000,
  couponsale: 50,
};

console.log();
//---------------------------------------
const market = {};

market.name = "이마트";
market.product = "딸기";
market.price = 8000;
market.stock = 75;
market.sell = (customer) => {
  let coupon = 1 - customer.discount / 100;
  customer.money -= market.price * coupon;
  market.stock--;
};

const lee = {};
const hong = {};

lee.name = "이순신";
lee.money = 10000;
lee.discount = 30;

hong.name = "홍길동";
hong.money = 20000;
hong.discount = 10;

market.sell(hong);
console.log(hong);
console.log(market);

market.sell(lee);
console.log(lee);
console.log(market);
