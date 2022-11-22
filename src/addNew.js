

const taskPopUp = () => {
    const taskModal = document.getElementById('taskModal')
    taskModal.style.display = 'flex'

    const form = document.createElement('div')
    form.classList.add('taskForm')
    taskModal.appendChild(form)

    const taskHeaderContainer = elementCreator('div', 'taskHeaderContainer')
    form.appendChild(taskHeaderContainer.elementNode)

    const taskHeader = elementCreator('div', 'taskHeader','Add New...')
    taskHeaderContainer.elementNode.appendChild(taskHeader.elementNode)

    const closeTask = elementCreator('div','closeTask','X')
    closeTask.elementNode.addEventListener('click', closeTask)
    taskHeaderContainer.elementNode.appendChild(closeTask.elementNode)

    const taskContainer = elementCreator('div','taskContainer')
    form.appendChild(taskContainer.elementNode)

    const taskSideBar = elementCreator('div','taskSidebar')
    taskContainer.elementNode.appendChild(taskSideBar.elementNode)

    const taskToDoTab = elementCreator('div', 'toDoTab', 'To Do')
    taskSideBar.elementNode.appendChild(taskToDoTab.elementNode)

    const taskDetails = elementCreator('div', 'taskDetails')
    taskContainer.elementNode.appendChild(taskDetails.elementNode)

    createTaskInputs(taskDetails.elementNode)

    return { taskModal }
}

const elementCreator = (type,id,textContent = '') => {

    const elementType = type
    const elementId = id
    const elementTextContent = textContent

    const createElement = () => {
        
        const element = document.createElement(elementType)
        element.id = elementId
        element.textContent = elementTextContent
        return element
    }
    const elementNode = createElement()

    return { elementNode }
}

const closeTask = () => {
    const taskModal = document.getElementById('taskModal')
    taskModal.style.display = 'none'
}

const createTaskInputs = (taskDetails) => {
    
    let taskDetailsNode = taskDetails
    const title = document.createElement('textarea')
    title.setAttribute('placeholder','Title')
    const details = document.createElement('textarea')
    details.setAttribute('placeholder','Details')
    details.setAttribute('id', 'details')
    const dateContainer = elementCreator('div','dateContainer').elementNode
    const dateTitle = elementCreator('div','dateTitle','Date: ')
    dateContainer.appendChild(dateTitle.elementNode)
    const dateDue = elementCreator('input','dateDue')
    dateContainer.appendChild(dateDue.elementNode)
    dateDue.elementNode.setAttribute('type','date')
    const priorityContainer = elementCreator('div','priorityContainer').elementNode
    const priorityTitle = elementCreator('div','priorityTitle','Priority: ')
    priorityContainer.appendChild(priorityTitle.elementNode)
    const priorityButtonsContainer = elementCreator('div', 'priorityButtonsContainer').elementNode
    
    const createPriorityButtons = (priorityButtonsContainer) => {
        const buttonOptions = ['Low','Medium','High']
        for(let i = 0; i < 3;i++) {
            const priorityButton = elementCreator('div',`priorityButton${i}`).elementNode
            priorityButton.classList.add('button')
            priorityButton.textContent = buttonOptions[i]
            priorityButtonsContainer.appendChild(priorityButton)
        }
        priorityContainer.appendChild(priorityButtonsContainer)
    }
    createPriorityButtons(priorityButtonsContainer)

    const nodeArray = [
        title,details,dateContainer,
        priorityContainer,priorityContainer
    ]
    
    const createTaskInputsFunction = () => {
        for(let i = 0;i < nodeArray.length;i++) {
            taskDetailsNode.appendChild(nodeArray[i])
        }
        return taskDetailsNode
    }
    taskDetailsNode = createTaskInputsFunction()

    return { taskDetailsNode }

}

const taskPopUpCreator = () => {

}

export default taskPopUp
        
       





