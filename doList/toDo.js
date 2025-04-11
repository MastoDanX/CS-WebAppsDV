function addToDo() {
    const task = document.querySelector("#doTask").value;
    // Checks if input was left blank
    if (task == "") {
        alert("Please enter a task.");
    } else {
        // Integrate the task list
        const list = document.querySelector("#doList");
        // Creates a new list item
        const li = document.createElement("li");
        // sets a checkbox item to the list as the task entered and adds functional buttons
        li.innerHTML = `<input type="checkbox" onclick="crsOut(this)">${task}
        <button onclick="rmvTask(this)">X</button>
        <button onclick="edtTask(this)">Edit</button>`;
        list.appendChild(li); // Adds task to the list
        // Clears the input field after adding a task
        document.querySelector("#doTask").value = "";
    }
}

function crsOut(checkbox) {
    console.log("crsOut");
    const li = checkbox.parentNode; // Get the parent list item
    if (checkbox.checked) {
        // Crosses out the task
        li.style.textDecoration = "line-through";
    } else {
         // Uncrosses the task
        li.style.textDecoration = "none";
    }
}

function rmvTask(button) {
    console.log("rmvTask");
    const li = button.parentNode;
    // Remove the list item from the list
    li.parentNode.removeChild(li); 
}
