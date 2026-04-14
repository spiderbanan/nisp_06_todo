const input = document.getElementById("task-input");
const button = document.getElementById("add-task-btn");
const list = document.getElementById("task-list");

// Obsługa kliknięcia przycisku
button.addEventListener("click", function () {
    const taskText = input.value;

    // Sprawdzenie czy coś wpisano
    if (taskText.trim() === "") {
        return;
    }

    // Tworzenie nowego elementu li
    const li = document.createElement("li");
    li.textContent = taskText;

    // Dodanie do listy
    list.appendChild(li);

    // Wyczyszczenie inputa
    input.value = "";
});