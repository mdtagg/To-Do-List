
const taskPopUp = () => {

    const taskModal = document.getElementById('taskModal')
    taskModal.style.display = 'flex'
    const form = elementCreator('div','form')
    form.classList.add('taskForm')
    const taskHeaderContainer = elementCreator('div','taskHeaderContainer')
    const taskHeader = elementCreator('div', 'taskHeader','Add new...')
    const closeTask = elementCreator('div','closeTask','X')
    const taskContainer = elementCreator('div','taskContainer')
    const taskSideBar = elementCreator('div','taskSidebar')
    const taskToDoTab = elementCreator('div', 'toDoTab', 'To Do')
    const taskDetails = elementCreator('div', 'taskDetails')

    taskModal.appendChild(form)
    form.appendChild(taskHeaderContainer)
    taskHeaderContainer.appendChild(taskHeader)
    taskHeaderContainer.appendChild(closeTask)
    form.appendChild(taskContainer)
    taskContainer.appendChild(taskSideBar)
    taskSideBar.appendChild(taskToDoTab)
    taskContainer.appendChild(taskDetails)

    createTaskInputs(taskDetails)

    const close = () => {
        taskModal.style.display = 'none'
    }

    closeTask.addEventListener('click',close)
    
    return { taskModal }
}

const createTaskInputs = (taskDetails) => {
    
    const title = elementCreator('textarea','taskTitle')
    title.setAttribute('placeholder','Title')
    taskDetails.appendChild(title)

    const details = elementCreator('textarea','details')
    details.setAttribute('placeholder','Details')
    taskDetails.appendChild(details)

    const dateContainer = elementCreator('div','dateContainer')
    taskDetails.appendChild(dateContainer)

    const dateTitle = elementCreator('div','dateTitle','Date: ')
    dateContainer.appendChild(dateTitle)

    const dateDue = elementCreator('input','dateDue')
    dateDue.setAttribute('type','date')
    dateContainer.appendChild(dateDue)

    const priorityContainer = elementCreator('div','priorityContainer')
    taskDetails.appendChild(priorityContainer)

    const priorityTitle = elementCreator('div','priorityTitle','Priority: ')
    priorityContainer.appendChild(priorityTitle)

    const priorityButtonsContainer = elementCreator('div', 'priorityButtonsContainer')
    
    const createPriorityButtons = (priorityButtonsContainer) => {
        const buttonOptions = ['Low','Medium','High']
        for(let i = 0; i < 3;i++) {
            const priorityButton = elementCreator('div',`priorityButton${i}`)
            priorityButton.classList.add('button')
            priorityButton.textContent = buttonOptions[i]
            priorityButtonsContainer.appendChild(priorityButton)
        }
    }
    createPriorityButtons(priorityButtonsContainer)
    taskDetails.appendChild(priorityButtonsContainer)

    return { taskDetails }
}

const elementCreator = (type,id,textContent) => {
    
    const element = document.createElement(type)
    element.id = id
    element.textContent = textContent
    return element 
}

export default taskPopUp
        
       





