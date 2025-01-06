// const hero = {
//   name: "gisang",
//   hp: 12000,
//   atk: 900,
//   def: 700,
//   attack: (monster) => {
//     console.log("공격을했다");
//     monster.hp -= hero.atk;
//     console.log(`몬스터hp : `);
//   },
// };

// const monster = {
//   name: "hanu",
//   hp: 900,
//   atk: 9000,
//   def: 7000,
//   life: true,
//   liveordead: () => {
//     if (hp >= 0) {
//       life = false;
//       delete monster.name;
//       console.log("사망");
//     }
//   },
// };

// hero.attack(monster);

// ------------------------------

const hero = {
  // hero 객체 생성
  name: "슈퍼맨", // name: 슈퍼맨 이라는 프로퍼티 생성
  hp: 5, // hp는 5라는 프로퍼티 생성
  power: 5, // power는 5 프로퍼티 생성성
  shield: 2,
  attack: (monster) => {
    // attack이라는 매서드에서 monster의 값을 사용할거니까 매개변수에 monster
    monster.hp -= hero.power; // monster.hp 를 hero.power 로 마이너스 동시에 monster.hp 를 기록록
    hero.hp -= monster.power - hero.shield; // hero.hp = hero.hp - monster.power - hero.shiled
  },
};

const monster = {
  name: "오크",
  hp: 5,
  power: 3,
  alive: true,
  isAlive: () => {
    const condition = monster.hp > 0;
    monster.alive = condition;
    return condition;
  },
};

hero.attack(monster);

console.log(hero);
console.log(monster);

console.log(monster.isAlive());
console.log(monster);

!monster.alive && delete monster.name;
console.log(monster);
