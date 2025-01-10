const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Add a new task
addBtn.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (taskText) {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const formattedDate = now.toLocaleDateString();

    // Create a new list item for the task
    const listItem = document.createElement("li");

    listItem.innerHTML = `
      <div class="checkbox-container">
        <input type="checkbox">
        <span>${taskText}</span>
      </div>
      <div class="timestamp">
        ${formattedDate} ${formattedTime}
      </div>
      <button class="delete-btn">Delete</button>
    `;

    // Handle task completion 
    listItem
      .querySelector("input[type='checkbox']")
      .addEventListener("change", (e) => {
        const taskTextElement = listItem.querySelector("span");
        if (e.target.checked) {
          taskTextElement.classList.add("completed");
        } else {
          taskTextElement.classList.remove("completed");
        }
      });

    // Handle task deletion
    listItem.querySelector(".delete-btn").addEventListener("click", () => {
      listItem.remove();
    });

    todoList.appendChild(listItem);
    todoInput.value = ""; 
  }
});

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
