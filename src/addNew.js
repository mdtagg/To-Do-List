
// const elementsObject = () => {

    // const taskModal = document.getElementById('taskModal')
    // taskModal.style.display = 'flex'
    // elements.form.classList.add('taskForm')

//     const form = elementCreatorTestTest('div','form')
//     const taskHeaderContainer = elementCreatorTestTest('div','taskHeaderContainer')
//     const taskHeader = elementCreatorTestTest('div', 'taskHeader','Add new...')
//     const closeTask = elementCreatorTestTest('div','closeTask','X')
//     const taskContainer = elementCreatorTestTest('div','taskContainer')
//     const taskSideBar = elementCreatorTestTest('div','taskSidebar')
//     const taskToDoTab = elementCreatorTestTest('div', 'toDoTab', 'To Do')
//     const taskDetails = elementCreatorTestTest('div', 'taskDetails')



//     return { form,taskHeaderContainer,taskHeader,closeTask,taskContainer,
//         taskSideBar,taskToDoTab,taskDetails }
// }

const taskPopUp = () => {

    const taskModal = document.getElementById('taskModal')
    taskModal.style.display = 'flex'
    const form = elementCreatorTestTest('div','form')
    form.classList.add('taskForm')
    const taskHeaderContainer = elementCreatorTestTest('div','taskHeaderContainer')
    const taskHeader = elementCreatorTestTest('div', 'taskHeader','Add new...')
    const closeTask = elementCreatorTestTest('div','closeTask','X')
    closeTask.addEventListener('click',closeTask)
    const taskContainer = elementCreatorTestTest('div','taskContainer')
    const taskSideBar = elementCreatorTestTest('div','taskSidebar')
    const taskToDoTab = elementCreatorTestTest('div', 'toDoTab', 'To Do')
    const taskDetails = elementCreatorTestTest('div', 'taskDetails')

    taskModal.appendChild(form)
    form.appendChild(taskHeaderContainer)
    taskHeaderContainer.appendChild(taskHeader)
    taskHeaderContainer.appendChild(closeTask)
    form.appendChild(taskContainer)
    taskContainer.appendChild(taskSideBar)
    taskSideBar.appendChild(taskToDoTab)
    taskContainer.appendChild(taskDetails)

    createTaskInputs(taskDetails)

    return { taskModal }
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
    const dateContainer = elementCreatorTest('div','dateContainer').elementNode
    const dateTitle = elementCreatorTest('div','dateTitle','Date: ')
    dateContainer.appendChild(dateTitle.elementNode)
    const dateDue = elementCreatorTest('input','dateDue')
    dateContainer.appendChild(dateDue.elementNode)
    dateDue.elementNode.setAttribute('type','date')
    const priorityContainer = elementCreatorTest('div','priorityContainer').elementNode
    const priorityTitle = elementCreatorTest('div','priorityTitle','Priority: ')
    priorityContainer.appendChild(priorityTitle.elementNode)
    const priorityButtonsContainer = elementCreatorTest('div', 'priorityButtonsContainer').elementNode
    
    const createPriorityButtons = (priorityButtonsContainer) => {
        const buttonOptions = ['Low','Medium','High']
        for(let i = 0; i < 3;i++) {
            const priorityButton = elementCreatorTest('div',`priorityButton${i}`).elementNode
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

const elementCreatorTestTest = (type,id,textContent) => {
    
    const element = document.createElement(type)
    element.id = id
    element.textContent = textContent
    return element 
}

const taskPopUpCreator = () => {

}

export default taskPopUp
        
       





