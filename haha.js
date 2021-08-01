const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"))

form.addEventListener("submit", function(event){
  event.preventDefault();
  add();
})

function add(){
  let textTodo = input.value;
  if(textTodo.length>0){
      const li =document.createElement("li");
      li.innerText = textTodo;
      li.classList.add("list-group-item");
      li.addEventListener("contextmenu", function(event){
        event.preventDefault();
        li.remove();
      })
      ul.appendChild(li);
      input.value ="";
      saveData();
    }
  };

  function saveData(){
    const lists = document.querySelectorAll("li");
    let todos = [];
    lists.forEach(list =>{
      todos.push(list.innerText);
    });
    localStorage.setItem("todos",JSON.stringify(todos));
  }