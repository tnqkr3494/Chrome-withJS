let a = 5;
const b = 2;

/*
    let과 const의 차이는 const는 상수(변하지않는), let은 변수(변할 수 있는)
    하지만 대부분의 변수지정은 const를 사용하도록 하자!
    var도 존재하지만 나중에 실수로 값이 변경되는 실수를 범할 때 우리가 인지하기 힘들어 사용하지 않는다.
*/

let myName = "Kang";

console.log(2134);
console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log("hello" + myName);

myName = "ingwon";

console.log(myName);

const amIFat = false;
// true, false, null(널은 자연적으로 생성되지 않고 우리가 그 변수에 값이 존재하지 않다는 것을 표현할 때 인위적으로 사용됨.)

console.log(amIFat);

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

console.log(dayOfWeek);
console.log(dayOfWeek[3]);

dayOfWeek.push("hello");

console.log(dayOfWeek);

//obj만들기!

const player = {
  name: "kang",
  points: 10,
  fat: false,
};

console.log(player);
player.fat = true;
console.log(player);
player.lastname = "Potato";
console.log(player);

//const obj안에 값들은 변경할 수 있는 변수로 취급된다! 따라서 값을 obj밖에서 변경도 가능하다.

function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("kang", 1);
sayHello("in", 2);
sayHello("gwon", 3);

const player2 = {
  name: "Kang",
  sayHello: function () {
    console.log("Hello!");
  },
};

player2.sayHello();
