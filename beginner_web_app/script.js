// HTMLから操作したい要素を取得します
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const emptyMessage = document.querySelector("#empty-message");
const clearCompletedButton = document.querySelector("#clear-completed");

// タスクのデータを保存する配列です
let tasks = loadTasks();

// 最初に画面を表示します
renderTasks();

// フォームが送信されたときの処理
taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); // ページの再読み込みを防ぎます

  const name = taskInput.value.trim();

  if (name === "") {
    return;
  }

  // 新しいタスクを配列に追加します
  tasks.push({
    id: Date.now(),
    name: name,
    completed: false
  });

  saveTasks();
  renderTasks();
  taskInput.value = "";
  taskInput.focus();
});

// 完了したタスクをまとめて削除します
clearCompletedButton.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
});

// タスク一覧を画面に描画する関数
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.className = "task-item";

    if (task.completed) {
      listItem.classList.add("completed");
    }

    // 完了チェックボックス
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `${task.name}を完了にする`);

    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    // タスク名
    const taskName = document.createElement("span");
    taskName.className = "task-name";
    taskName.textContent = task.name;

    // 削除ボタン
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "削除";

    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter((item) => item.id !== task.id);
      saveTasks();
      renderTasks();
    });

    listItem.append(checkbox, taskName, deleteButton);
    taskList.appendChild(listItem);
  });

  // 未完了タスクの数を表示します
  const remainingCount = tasks.filter((task) => !task.completed).length;
  taskCount.textContent = `${remainingCount}件`;

  // タスクが0件なら案内文を表示します
  emptyMessage.hidden = tasks.length !== 0;
}

// ブラウザ内にタスクを保存する関数
function saveTasks() {
  localStorage.setItem("myTasks", JSON.stringify(tasks));
}

// 保存済みのタスクを読み込む関数
function loadTasks() {
  const savedTasks = localStorage.getItem("myTasks");

  if (savedTasks === null) {
    return [];
  }

  try {
    return JSON.parse(savedTasks);
  } catch (error) {
    console.error("タスクの読み込みに失敗しました:", error);
    return [];
  }
}
