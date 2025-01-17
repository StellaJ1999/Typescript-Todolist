const todoForm = document.querySelector('form') as HTMLFormElement;
const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const todoListUL = document.getElementById('todo-list') as HTMLUListElement;

const allTodos: string[] = [];

todoForm.addEventListener('submit', function (e: Event) {
    e.preventDefault();
    addTodo();
});

function addTodo(): void {
    const todoText = todoInput.value.trim();
    if (todoText.length > 0) {
        allTodos.push(todoText);
        updateTodoList();
        todoInput.value = ""; // Clear the input field
    }

    console.log("Todo added", todoText);
}