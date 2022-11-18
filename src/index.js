import './styles.css'

const addTaskButton = document.getElementById('add-task-button')
const body = document.getElementById('body')
const container = document.getElementById('container')

const taskPopUp = () => {
    const PopUp = document.createElement('div')
    PopUp.classList.add('taskModal')
    container.style.zIndex = '2'
    body.appendChild(PopUp)
}

addTaskButton.addEventListener('click', taskPopUp)