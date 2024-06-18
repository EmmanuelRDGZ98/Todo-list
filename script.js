document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list');

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = taskText;
        span.contentEditable = true;
        li.appendChild(span);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Done';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        li.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
            completedTaskList.appendChild(li);
            li.removeChild(deleteBtn);
        });
        li.appendChild(deleteBtn);

        return li;
    }

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
