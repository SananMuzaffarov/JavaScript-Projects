let addButton = document.getElementById("addToDo");
let inputField = document.getElementById("inputField");
let todos = document.getElementById("toDoContainer");

addButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    todos.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})

