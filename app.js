// ****************************
// To-do list
// by Fernanda Pacheco 
// ****************************

// ***********INDEX************
// 1- SELECTORS
// 2- NEW LIST ITEM
// 3- COMMANDS
// ****************************


// ***************************
// 1 - SELECTORS
// ***************************
const list = document.querySelector("#todo-list");
const addBtn = document.querySelector("#a-btn");
const name = document.querySelector("#name");

// ***************************
// 2 - NEW LIST ITEM
// ***************************

// ADD BUTTON
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
    listItem.classList.add("todo-default", "list-line");
    deleteBtn.classList.add("far", "fa-trash-alt", "del-btn", "fa-icon");

    group.append(input, todoText)
    listItem.append(group, deleteBtn);
    list.append(listItem);

    todoText.focus();
}

// CTRL + I 
// font: https://www.gavsblog.com/blog/detect-single-and-multiple-keypress-events-javascript
let keysPressed = {};

window.addEventListener('keydown', (e) => {
    keysPressed[e.key] = true;
    // console.log(keysPressed)

    if (keysPressed['Control'] && e.key == 'i') {
        // console.log(e.key);
        newItem();
    }
});

document.addEventListener('keyup', (e) => {
    delete keysPressed[e.key];
});

// ENTER
list.addEventListener('keydown', function (e) {
    // console.log(e);
    if (e.keyCode === 13 && e.srcElement.nodeName === "SPAN") {
        e.preventDefault();
        newItem();
    }
})

// ***************************
// 3 - COMMANDS
// ***************************

// 3.1 - TASK COMPLETE 
// 3.2 - DELETE LIST ITEM
// 3.3 - FOCUS 
list.addEventListener("click", function (e) {
    if (e.target.nodeName === "INPUT") {
        e.target.nextElementSibling.classList.toggle("strikeout");
    } else if (e.target.nodeName === "BUTTON") {
        e.target.parentElement.remove();
    } else if (e.target.nodeName === "LI") {
        e.target.children[0].children[1].focus();
    }
})

