let addTask = document.querySelector(".addButton");
let inputATask = document.querySelector(".inputTask");
let id = 0;
addTask.onclick = (event) => {
    let task = `           
    <div class="task">
        <input class="checkBox" onclick=checkedTheTask("${++id}")  type="checkbox" name="" id="${id}">
        <label class="checkBoxLabel" for="${id}">${inputATask.value}</label>
    </div>`;
    document.querySelector(".tasksContainer").innerHTML += task;
    inputATask.value = '';


}
function checkedTheTask(id) {
    let labelOfCheckBox = document.querySelector(`label[for="${id}"]`);
    let checkbox = document.querySelector(`input[id="${id}"]`);
    if(checkbox.checked)
    {
        labelOfCheckBox.style.textDecoration = "line-through";
        checkbox.setAttribute("checked",true);
    }
    else
    {
        labelOfCheckBox.style.textDecoration = "none";
        checkbox.removeAttribute("checked");
    }
}

