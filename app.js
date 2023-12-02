const inputAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search')

const resetForm = event => event.target.reset()

const getTodo = inputValue => `
    <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
    </li>
`

const addTodo = (inputValue, event) => {
    if(inputValue.length) {
        todosContainer.innerHTML += getTodo(inputValue)
        resetForm(event)
    }
}

const removeTodo = clickedElement => {
    const trashDataValue = clickedElement.dataset.trash
    const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)
    
    if(trashDataValue) {
        todo.remove()
    }
}

const manipulateClasses = (todos, addClass, removeClass) => {
    todos.forEach(todo => {
        todo.classList.add(addClass)
        todo.classList.remove(removeClass)
    })
}

const hideTodos = (todos, inputValue) => {
    const todosToHide = filterTodos(todos, inputValue, true)

    manipulateClasses(todosToHide, 'd-none', 'd-flex')
}

const showTodos = (todos, inputValue) => {
    const todosToShow = filterTodos(todos, inputValue, false)

    manipulateClasses(todosToShow, 'd-flex', 'd-none')
}

const filterTodos = (todos, inputValue, returnMatchedTodos) => todos
    .filter(todo => {
        const matchedTodo = todo.textContent.toLowerCase().includes(inputValue)
        return returnMatchedTodos ? !matchedTodo : matchedTodo
    })

inputAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()

    addTodo(inputValue, event)
})

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target

    removeTodo(clickedElement)
})

inputSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    const todos = Array.from(todosContainer.children)

    hideTodos(todos, inputValue)
    showTodos(todos, inputValue)
})