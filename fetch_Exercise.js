
let title=document.querySelector("h2");
title.textContent="TodoS";


let container_el =document.querySelector(".container");


function rendertodo(content){

    let todo =document.createElement("p");
    todo.textContent = content.todo;

    let checkbox=document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.innerHTML= content.completed;


    /*container_el.appendChild(title);*/
    container_el.appendChild(todo);
    container_el.appendChild(checkbox);


};






fetch("https://dummyjson.com/todos").then(function(responce){
    console.log(responce);
    return responce.json();

}).then(function(responce){

    responce.todos.forEach(items => {
    rendertodo(items);
    
});


});