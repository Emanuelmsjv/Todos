

document.addEventListener(
    'DOMContentLoaded', () => {
        const inputField = document.getElementById('inp1');
        const submitButton = document.getElementById('butto1');
        const taskList = document.getElementById('task-list');

        submitButton.addEventListener('click', addTask);
        loadTasks();
        
        
      
        



        function editTask(event) {
            const taskToEdit = event.target.parentNode;
            const originalText = taskToEdit.firstChild.textContent;
            
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = originalText;
            editInput.classList.add('edit-input');

            taskToEdit.firstChild.replaceWith(editInput);

            const editButton = event.target;
            editButton.textContent = 'Save';
            editButton.removeEventListener('click', editTask);
            editButton.addEventListener('click', saveTask);
        }
        
        function addTask() {
         const taskText = inputField.value;

        if (taskText.trim() !== '') {
        const newTask = document.createElement('li');

        const editButton = document.createElement('button');
        editButton.textContent = '✍️'; 
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', editTask);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'completed';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', (event) => {
            deleteTask(event);
        });

        const taskTextNode = document.createTextNode(taskText);
        newTask.appendChild(taskTextNode);
        newTask.appendChild(editButton);
        newTask.appendChild(deleteButton);

        taskList.appendChild(newTask);
        inputField.value = '';

        saveTasks();
        }
    }

        function saveTask(event) {
            const taskToSave = event.target.parentNode;
            const editInput = taskToSave.querySelector(".edit-input");
            const newText = editInput.value.trim();
            
            if (newText !== '') {
                const newTextNode = document.createTextNode(newText);
                editInput.replaceWith(newTextNode);
                
                const saveButton = event.target;
                saveButton.textContent = '✍️';
                saveButton.removeEventListener('click', saveTask);
                saveButton.addEventListener('click', editTask);
            } else {
                const originalText = editInput.value;
                const originalTextNode = document.createTextNode(originalText);
                editInput.replaceWith(originalTextNode);
                
                const saveButton = event.target;
                saveButton.textContent = '✍️';
                saveButton.removeEventListener('click', saveTask);
                saveButton.addEventListener('click', editTask);
            }
            saveTasks(); 
        }
        
        function saveTasks() {
            const tasks = [];
            taskList.querySelectorAll('li').forEach(taskItem => {
                const taskText = taskItem.firstChild.textContent;
                tasks.push(taskText);
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        
        function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(taskText => {
            const newTask = document.createElement('li');

            const editButton = document.createElement('button');
            editButton.textContent = '✍️'; 
            editButton.classList.add('edit-btn');
            editButton.addEventListener('click', editTask);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'completed';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', (event) => {
                deleteTask(event);
                addPoints(); // Increment points when a task is marked as completed
            });

            const taskTextNode = document.createTextNode(taskText);
            newTask.appendChild(taskTextNode);
            newTask.appendChild(editButton);
            newTask.appendChild(deleteButton);

            taskList.appendChild(newTask);
           });
         }
     }

        
        let points = 0;

      function addPoints() {
          points++;
         document.getElementById('point-counter').textContent = `Points: ${points}`;
}

       document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', () => {
        addPoints();
        });
     });
     
     
     
    


   function deleteTask(event) {
    const taskToRemove = event.target.parentNode;
    taskList.removeChild(taskToRemove);         
    saveTasks();    
    
     celebrate(); 
    
      }
      
      
      
      function celebrate() {
        confetti({
        particleCount: 150,
        spread: 100,
        angle: 60,
        startVelocity: 30,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#bb0000', '#ffffff', '#0000ff'] // Custom colors
    });
}
     
     
    
        
        
        
    }
    
    
);