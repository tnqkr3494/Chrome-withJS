document.title = "Hello! From JS!";

/*
const title = document.getElementById("title");

title.innerText = "Got you!";

*/

console.dir(title);

const hellos = document.getElementsByClassName("hello");

console.log(hellos);

const hellos2 = document.querySelector(".hello h1");
/*
querySelector : css selector로 이용가능하다. css모양으로 출력함, 또한 첫번째 값만 출력됨
만약 모든 .hello h1값을 가져오고 싶다면 querySelectorAll을 사용하자.
*/
console.log(hellos2);
