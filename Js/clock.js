const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); //padStart(문자만 가능)를 이용해 2자릿수, 앞에는 0으로 채워라!
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//setInterval(sayHello, 5000); ==> 특정시간마다 반복해서 실행

//setTimeout(sayHello, 5000); ==> 지정 시간이 지나면 1회만!!! 실행

getClock(); //시작할 때도 1초를 기다려야 하기 때문에 getClock을 먼저 실행시켜준다.
setInterval(getClock, 1000);
