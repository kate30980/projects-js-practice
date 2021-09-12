const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoText = input.value;

  if (todo) {
    const todoEl = document.createElement("li");
    todoEl.innerText = todo;
    todos.appendChild(todoEl);
  }
});
