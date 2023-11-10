const body = document.body
const ul = document.querySelector('#to-do-list')
const form = document.querySelector('form')
const input = document.querySelector('input')
const sun = document.querySelector('#sun')
const moon = document.querySelector('#moon')

const insertClassesIntoElements = (firstElement, secondElement) => {
    firstElement.classList.add('bi')
    firstElement.classList.add('bi-x-square')
    firstElement.classList.add('bic')

    secondElement.classList.add('d-flex')
    secondElement.classList.add('gap-2')
}

const createElement = value => {
    const li = document.createElement('li')
    const i = document.createElement('i')

    insertClassesIntoElements(i, li)

    li.textContent = value
    li.append(i)

    return li
}

const insertItemIntoList = value => {
    const li = createElement(value)

    input.value = ''
    input.focus()

    ul.append(li)
}

const checkInputValue = event => {
    event.preventDefault()

    const inputValue = event.target.input.value

    if (!inputValue) {
        return
    }

    insertItemIntoList(inputValue)
}

const removeClickedElement = event => {
    clickedElement = event.target
    clickedElementTagName = clickedElement.tagName
    clickedElementParent = clickedElement.parentElement

    if(clickedElementTagName === 'I') {
        clickedElementParent.remove()
    }
}

form.addEventListener('submit', checkInputValue)
ul.addEventListener('click', removeClickedElement)
sun.addEventListener('click', () => {
    sun.classList.add('d-none')
    moon.classList.remove('d-none')
})
moon.addEventListener('click', () => {
    moon.classList.add('d-none')
    sun.classList.remove('d-none')
})