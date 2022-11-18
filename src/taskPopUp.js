
   
   

const taskPopUp = () => {
    const task = document.getElementById('taskModal')
    task.style.display = 'flex'
    const form = document.createElement('div')
    form.classList.add('taskForm')
    task.appendChild(form)
    return task
}

export default taskPopUp
        
       




