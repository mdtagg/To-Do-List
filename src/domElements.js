
const domElements = () => {
    const taskButton = document.getElementById('add-task-button')

    const taskPopUp = () => {
        const taskPopUp = document.createElement('div')
        taskPopUp.classList.add('taskModal')
        body.appendChild(taskPopUp)
    }

    taskButton.addEventListener('click', taskPopUp)
    // console.log(taskButton)
    // const createTaskButton = () => {
    //     taskButton.addEventListener('click', taskPopUp)
    //     return taskButton
    // } 

    return { taskPopUp }
}

export default domElements