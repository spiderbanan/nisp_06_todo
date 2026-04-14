// Pobranie elementów z DOM
const input = document.getElementById("task-input");
const button = document.getElementById("add-task-btn");
const list = document.getElementById("task-list");

// Funkcja zapisująca zadania do localStorage
function saveTasks() {
    const tasks = [];

    document.querySelectorAll("#task-list li").forEach(li => {
        const text = li.querySelector("span").textContent;
        const completed = li.classList.contains("completed");

        tasks.push({ text, completed });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Funkcja tworząca element li (żeby używać w kilku miejscach)
function createTaskElement(taskText, isCompleted = false) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isCompleted;

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Usuń";

    if (isCompleted) {
        li.classList.add("completed");
    }

    // Checkbox
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed");
        saveTasks();
    });

    // Usuwanie
    deleteBtn.addEventListener("click", function () {
        li.remove();
        saveTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

// Dodawanie nowego zadania
button.addEventListener("click", function () {
    const taskText = input.value;

    if (taskText.trim() === "") return;

    const li = createTaskElement(taskText);
    list.appendChild(li);

    input.value = "";

    saveTasks();
});

// Wczytywanie zadań przy starcie
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        const li = createTaskElement(task.text, task.completed);
        list.appendChild(li);
    });
}

// Start aplikacji
loadTasks();