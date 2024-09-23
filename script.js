

/* <!-- 
- #TO DO LIST
--> */

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();

// show list button side bar -> to do list
document.getElementById('todo-button').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah perilaku default link
  const todo = document.querySelector('.todo');
  todo.style.display = todo.style.display === 'none' || todo.style.display === '' ? 'block' : 'none';
});

/* <!-- 
- #
--> */