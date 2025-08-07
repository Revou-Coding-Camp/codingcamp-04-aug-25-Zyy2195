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
    showNotification();
  }
});

function addTask(task, date) {
  const body = document.getElementById("todo-body");
  const noTaskRow = document.getElementById("no-task");
  if (noTaskRow) noTaskRow.remove();

  const tr = document.createElement("tr");

  const formattedDate = date.toLocaleString("id-ID", {
    weekday: "short", year: "numeric", month: "short",
    day: "numeric", hour: "2-digit", minute: "2-digit"
  });

  tr.innerHTML = `
    <td>${task}</td>
    <td>${formattedDate}</td>
    <td><span class="status">Aktif</span></td>
    <td><button class="delete-btn">Hapus</button></td>
  `;

  tr.querySelector(".delete-btn").addEventListener("click", () => {
    tr.remove();
    if (body.children.length === 0) {
      body.innerHTML = `<tr id="no-task"><td colspan="4" style="text-align: center;">Tidak ada tugas ditemukan</td></tr>`;
    }
  });

  body.appendChild(tr);
}

function showNotification() {
  const notif = document.getElementById("notification");
  notif.classList.remove("hidden");
  setTimeout(() => notif.classList.add("hidden"), 2000);
}

document.getElementById("clear-all").addEventListener("click", () => {
  const body = document.getElementById("todo-body");
  body.innerHTML = `<tr id="no-task"><td colspan="4" style="text-align: center;">Tidak ada tugas ditemukan</td></tr>`;
});
