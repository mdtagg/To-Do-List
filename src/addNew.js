

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
    
    return taskModal
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

const createNew = () => {

}

export default taskPopUp
        
       




