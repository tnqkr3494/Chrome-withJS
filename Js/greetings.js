const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string만 포함한 변수는 관습적으로 대문자로 이름을 지정한다.
const USERNAME_KEY = "username";

//무언가 막힐때 property를 참고하면 쉽다!(예시 : console.log(loginInput.dir))

function onLoginSubmit(event) {
  /*
    이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다. 
    첫 arument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
    JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다. 
    ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음
  */
  event.preventDefault(); //브라우저의 기본동작(form사용시 새로고침되는)을 막아준다.
  const userType = loginInput.value;
  console.log(event); //그 정보들은 이 코드로 console에서 확인가능하다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(userType);
  localStorage.setItem(USERNAME_KEY, userType); //localStorage에 key와 value값 저장
  paintGreeting(userType);
}
//엔터 또는 로그인 버튼을 클릭할 시 동작한다.

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
} //JS에서 함수선언과 var는 실행시 코드의 가장 상단부분으로 이동하는 특성(hoisting)이 있다.

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
