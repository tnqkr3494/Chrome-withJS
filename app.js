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

//return문

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

console.log(calculator.power(2, 4));

//조건문

const age = parseInt(prompt("How old are you?")); //parseInt : 문자를 숫자로 숫자를 문자로 바꿔주는 함수, prompt : scanf와 유사

console.log(typeof age); //typeof라는 키워드를 사용해 변수의 type을 확인할 수 있다.

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number!");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else {
  console.log("You can't drink");
}

/*

다른 언어에서 == 을 쓰다가 === 를 사용하여 찾아보니
JS에서만 사용하는 연산자이며
== 은 값만을 비교하고
=== 은 유형도 비교하여 === 를 주로 사용하는걸 추천한다고 하네요.
ex)
0 == false ---> true
0 === false ---> false

배열형 : 배열의 데이터 값이 같더라도 배열을 할당할때, 각 변수는 각 메모리의 주소를 참조한다. 참조하는 메모리의 주소가 다르기 때문에 두 배열는 같지 않다.
var a = [1,2,3];
var b = [1,2,3];
console.log(a == b); // false
console.log(a === b); // false

*/
