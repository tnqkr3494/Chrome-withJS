/*
document.title = "Hello! From JS!";


const title = document.getElementById("title");

title.innerText = "Got you!";

console.dir(title); dir상에서 on으로 시작되는 property는
event로 사용가능한 것이다.


const hellos = document.getElementsByClassName("hello");

console.log(hellos);

*/

const h1 = document.querySelector(".hello h1");
/*
querySelector : css selector로 이용가능하다. css모양으로 출력함, 또한 첫번째 값만 출력됨
만약 모든 .hello h1값을 가져오고 싶다면 querySelectorAll을 사용하자.

console.log(h1);

h1.style.color = "blue";

function handTitleClick() {
  console.log("title was clicked");
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function hadnlerMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
 
    document의 body,head,title 이런것들은 중요하기 때문에
    document.body.style~의 명령이 허용되지만, div같은것들은 호출이 안됨 

    나머지 element들은 querySelector나 getElementById로 불러와야됨!!!!!!!

}

function handleWindowCopy() {
  alert("copied");
}

h1.onclick = handTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", hadnlerMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
*/

function handleTitleClick() {
  /*
  clicked가 반복되기 때문에 const로 상수지정함.
    
  const clickedClass = "clicked";
  
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
  */
  h1.classList.toggle("clicked"); //위에 적혀진 코드와 똑같은 구현
}
/*
    css와 js와 html과의 연동성
    className말고 classList를 사용할 경우 내장함수를 이용하면 원래 있던 class를 변경하지않고 추가또는 제거가 가능하다.
*/
h1.addEventListener("click", handleTitleClick);
