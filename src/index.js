document.addEventListener("DOMContentLoaded", () => {
  // Select the form
  const form = document.getElementById("create-task-form");

  // Add event listener for submit
  form.addEventListener("submit", (event) => {
    // Stop the page from refreshing
    event.preventDefault();

    // Handle form data: Get the value from the input named "new-task-description"
    const newTaskDescription = event.target.querySelector("input[name='new-task-description']").value;

    // Call the function to build and add the task
    buildToDo(newTaskDescription);
  });

  // Function to add item to list and display
  function buildToDo(task) {
    // Create a new li element
    const li = document.createElement("li");

    // Add the task as the text content
    li.textContent = task;

    // Append the li element to the task list
    // NOTE: The error "Cannot read properties of null" indicates the ID "task" wasn't found.
    // We are changing it to "tasks" (plural) to match the actual HTML file in the repo.
    document.getElementById("tasks").appendChild(li);
  }
});