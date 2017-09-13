let taskList = document.querySelector("#taskList");
const addTaskInput = document.querySelector("#addTaskInput");
const addTaskButton = document.querySelector("#addTaskButton");

const addTask = () => {
	if (addTaskInput.value != " ") {
		let taskItem = document.createElement("li");
		let taskText = document.createElement("span");
		taskText.textContent = addTaskInput.value;
		let checkBox = document.createElement("input");
		checkBox.setAttribute("type", "checkBox");
		checkBox.setAttribute("class", "checkbox");
		let removeItem = document.createElement("button");
		removeItem.setAttribute("class", "remove");
		removeItem.textContent = "Delete";
		taskList.appendChild(taskItem);
		taskItem.appendChild(taskText);
		taskItem.appendChild(checkBox);
		taskItem.appendChild(removeItem);
		addTaskInput.value = " ";
	};
}

addTaskButton.addEventListener("click", addTask);

addTaskInput.addEventListener("keydown", (event) => {
	if (event.keyCode == 13) {
		addTask();
	}});

	taskList.addEventListener("click", (event) => {
		if(event.target.tagName == "SPAN") {
			let taskText = event.target;
			let taskItem = event.target.parentNode;
			let editMode = document.createElement("input");
			editMode.setAttribute("type", "text");
			editMode.setAttribute("value", taskText.textContent);
			taskItem.replaceChild(editMode, taskText);
			editMode.addEventListener("keydown", (event) => {
				if (event.keyCode == 13) {
					addTask();
				}});
			}
		});



		taskList.addEventListener("change", (event) => {
			if(event.target.tagName == "INPUT") {
				if (event.target.checked) {			event.target.previousElementSibling.style.textDecoration="line-through";
			} else {		event.target.previousElementSibling.style.textDecoration="initial";
		}}});

		taskList.addEventListener("click", (event) => {
			if(event.target.tagName == "BUTTON") {
				if (event.target.className == "remove") {
					let taskItem = event.target.parentNode;
					taskList = taskItem.parentNode;
					taskList.removeChild(taskItem);
				}}});
