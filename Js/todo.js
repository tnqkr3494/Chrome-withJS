const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  //setItem은 string값만 저장한다!
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify : 어떤것이든 string으로 변경해주는 코드
}

function deleteToDo(event) {
  const li = event.target.parentElement; //어떤 버튼이 클릭되었는지 확인해주는 코드
  //filter : forEach랑 비슷한 느낌의 함수. 기존array는 유지하되 return값이 true면 유지, false면 제외해서 새로운 array를 생성함.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //화살표 함수, toDo.id는 number, li.id는 string
  /*
  원인은 paintToDo 함수 내에 있는 
    const li = document.createElement("li");
    li.id = newTodo.id;
  li는 DOM을 직접 건드린건데, mdn 문서 뒤져보니 DOM의 id는 문자열이라고 나와 있었습니다. 
  즉 우리가 newTodo.id로 number를 넣어주었어도, DOM에선 string으로 형변환해서 받아들이는거 같습니다.
  */
  li.remove();
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌"; //이모지 : window + .
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //li는 span이라는 자식을 갖게됨. append : 뒤로 붙임, prepend : 앞으로 붙임
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = ""; //todo리스트에 입력한 값을 비우는 작업
  const newTodoOjb = {
    text: newTodo,
    id: Date.now(), //Date.now() 거의 랜덤한 숫자를 만들어주는 함수
  };
  toDos.push(newTodoOjb);
  paintToDo(newTodoOjb);
  saveToDos(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
function sayHello(item) {
  item또한 event처럼 JS에서 지원해주는 argument
  console.log("this is the turn of", item);
}
*/

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos); //string을 array로 변경하는 코드
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //forEach : array함수로써 배열값 하나당 한번씩 실행해주는 코드
}
