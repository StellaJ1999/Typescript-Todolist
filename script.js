"use strict";
const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');
const allTodos = [];
todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    addTodo();
});
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText.length > 0) {
        allTodos.push(todoText);
        updateTodoList();
        todoInput.value = ""; // Clear the input field
    }
    console.log("Todo added", todoText);
}
