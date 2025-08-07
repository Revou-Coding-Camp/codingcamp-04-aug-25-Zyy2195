document.getElementById("todo-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const taskInput = document.getElementById("task-input");
  const dateInput = document.getElementById("date-input");
  const task = taskInput.value.trim();
  const date = new Date(dateInput.value);

  if (task && dateInput.value) {
    addTask(task, date);
    taskInput.value = "";
    dateInput.value = "";
  }
});

function addTask(task, date) {
  const list = document.getElementById("todo-list");

  const li = document.createElement("li");
  const formattedDate = date.toLocaleString("id-ID", {
    weekday: "short", year: "numeric", month: "short",
    day: "numeric", hour: "2-digit", minute: "2-digit"
  });

  li.innerHTML = `
    <span>${task} <br><small>${formattedDate}</small></span>
    <button onclick="this.parentElement.remove()">Hapus</button>
  `;

  list.appendChild(li);
}
