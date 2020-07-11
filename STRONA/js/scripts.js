const list = document.querySelector('.list');

const inputField = document.querySelector('.input-item');


let data = {
    todoItems: []
}

class TodoItem {
    constructor(id, text, isDone) {
        this.id = id;
        this.text = text;
        this.isDone = isDone;
    }

    toggleIsDone = () => {

        this.isDone = !this.isDone;
    }
}

let todoItemText = '<div id="%%id%%" class="element"><div class="element-content">%%text%%</div><div class="element-buttons"><button class="far fa-times-circle" onclick="deleteItem(event)" ></button><button onclick="checkUncheck(event)" class=" far fa-check-circle"></button></div></div>'

const focusOnInputField = () => {

    inputField.focus();
}


const addItem = () => {

    if (inputField.value !== '') {

        inputField.classList.remove('empty-input')


        let id, newItem;
        if (data.todoItems.length > 0) {
            id = data.todoItems[data.todoItems.length - 1].id + 1;
        } else {
            id = 0;
        }

        newItem = new TodoItem(id, inputField.value, false);

        data.todoItems.push(newItem);


        let displayHtml = todoItemText.replace('%%id%%', newItem.id);
        displayHtml = displayHtml.replace('%%text%%', newItem.text);

        list.insertAdjacentHTML('beforeend', displayHtml);

        inputField.value = '';
    } else {
        inputField.classList.add('empty-input')
    }
    focusOnInputField();
}

const deleteItem = (event) => {

    const id = event.target.parentNode.parentNode.id;

    if (id) {

        let index = data.todoItems.findIndex(x => x.id == id);
        data.todoItems.splice(index, 1);
        let item = document.getElementById(id);
        item.parentNode.removeChild(item);
    }
}

const checkUncheck = (event) => {

    const id = event.target.parentNode.parentNode.id;
    if (id) {

        let index = data.todoItems.findIndex(x => x.id == id);
        let todoItem = data.todoItems[index];


        todoItem.toggleIsDone();

        document.getElementById(id).querySelector('.element-content').classList.toggle('done');


    }


}


const closeButton = document.querySelector('.close');
const sideMenu = document.querySelector('.nav-links');
const toggleButton = document.querySelector('.toggleButton');
const backdrop = document.querySelector('.backdrop');





const openSideMenu = () => {

    sideMenu.classList.toggle('hide');
    backdrop.classList.toggle('hide');
    closeButton.classList.toggle('hide');
    console.log(sideMenu.classList);

}

const closeSideMenu = () => {

    sideMenu.classList.add('hide');
    backdrop.classList.add('hide');
    closeButton.classList.add('hide');
}

closeButton.addEventListener('click', closeSideMenu);
toggleButton.addEventListener('click', openSideMenu);

