// Function to add a new task to the list
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') {
        return; // Do nothing if the input is empty
    }

    // Create a new list item
    const li = document.createElement('li');

    // Create a span to hold the task text
    const span = document.createElement('span');
    span.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = function() {
        li.remove(); // Remove the task from the list
    };

    // Add an event listener to toggle the completion of the task
    li.onclick = function() {
        li.classList.toggle('completed');
    };

    // Append the span and button to the list item
    li.appendChild(span);
    li.appendChild(removeButton);

    // Add the list item to the task list
    const taskList = document.getElementById('taskList');
    taskList.appendChild(li);

    // Clear the input field
    input.value = '';
}

// Optional: Add a keypress event to add tasks when pressing Enter
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
