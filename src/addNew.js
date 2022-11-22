

const taskPopUp = () => {
    const taskModal = document.getElementById('taskModal')
    taskModal.style.display = 'flex'

    const form = document.createElement('div')
    form.classList.add('taskForm')
    taskModal.appendChild(form)

    const taskHeader = elementCreator('div', 'taskHeader','Add New...')
    form.appendChild(taskHeader.elementNode)

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



const createTaskInputs = (taskDetails) => {
    
    let taskDetailsNode = taskDetails
    const title = document.createElement('textarea')
    const details = document.createElement('textarea')
    const dateContainer = document.createElement('div')
    const dateDue = document.createElement('input')
    const priorityContainer = document.createElement('div')
    const priority = document.createElement('input')

    const nodeArray = [
        title,details,dateContainer,
        dateDue,priorityContainer,priority
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

export default taskPopUp
        
       




