const list = document.querySelector("#todo-list");
const addBtn = document.querySelector("#a-btn");
const name = document.querySelector("#name");

addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    newItem();
})

const newItem = () => {
    const listItem = document.createElement("li");
    const todoText = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const input = document.createElement("input");
    const group = document.createElement("div");

    input.type = "checkbox";
    todoText.contentEditable = "true";

    todoText.classList.add("item");
    listItem.classList.add("todo-default", "list-container");
    deleteBtn.classList.add("far", "fa-trash-alt", "del-btn", "fa-icon");

    group.append(input, todoText)
    listItem.append(group, deleteBtn);
    list.append(listItem);

    todoText.focus();
}

list.addEventListener("click", function (e) {
    // console.dir(e.target);
    if (e.target.nodeName === "INPUT") {
        e.target.parentElement.classList.toggle("todo-complete");
    } else if (e.target.nodeName === "BUTTON") {
        e.target.parentElement.remove();
    } else if (e.target.nodeName === "LI") {
        e.target.children[0].children[1].focus();
    }
})

window.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        newItem();
    }
})

