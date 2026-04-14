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

// Obsługa kliknięcia przycisku
button.addEventListener("click", function () {
    const taskText = input.value;

    if (taskText.trim() === "") return;

    // Tworzenie elementów
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = taskText;

    // Reakcja na zaznaczenie checkboxa
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed");
    });

    // Dodanie elementów do li
    li.appendChild(checkbox);
    li.appendChild(span);

    // Dodanie do listy
    list.appendChild(li);

    input.value = "";
});