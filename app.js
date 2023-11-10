const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

input.focus()

let li;
let i;

const createItem = () => {
    li = document.createElement('li')
    i = document.createElement('i')

    li.textContent = input.value

    li.classList.add('d-flex')
    li.classList.add('gap-2')

    i.classList.add('bi')
    i.classList.add('bi-x-square')
    i.style.cursor = 'pointer'

    li.append(i)
}

const clearInputBox = () => {
    input.value = ''
    input.focus()
}

const addItemToTheList = () => {
    ul.append(li)
}

form.addEventListener('submit', event => {
    event.preventDefault()

    if(!input.value) {
        return
    }

    createItem()
    clearInputBox()
    addItemToTheList()
})

ul.addEventListener('click', event => {
    const clickedElementTagName = event.target.tagName
    const clickedElementParent = event.target.parentElement

    const elementIsAnIcon = clickedElementTagName === 'I'

    if(elementIsAnIcon) {
        clickedElementParent.remove()
    }
})