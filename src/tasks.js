let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const updateLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const addNewTask = (input) => {
  if (input.value.trim().length === 0) return;
  tasks.push({
    description: input.value.trim(),
    completed: false,
    index: tasks.length,
  });
  input.value = '';
  updateLocalStorage();
  showTasks();
}

const removeTask = (index) => {
  tasks = tasks.filter((task) => task.index !== index);

  // Update remaining task indices
  tasks.forEach((task, idx) => {
    task.index = idx;
  });

  updateLocalStorage();
  showTasks();
};

const updateTask = (task) => {
  tasks[task.index].description = task.description;
  updateLocalStorage();
};

const resetTaskList = () => {
  const taskListItems = document.querySelectorAll('#todo-list > li');
  taskListItems.forEach((listItem, index) => {
    listItem.style.backgroundColor = '';

    const taskDescription = document.createElement('span');
    taskDescription.innerText = tasks[index].description;
    taskDescription.classList.add('task-description');

    const checkBox = listItem.children[0];
    const icon = listItem.children[2];
    icon.innerText = 'more_vert'; // Icon

    listItem.innerHTML = '';
    listItem.append(checkBox, taskDescription, icon);
  });
}

const showTasks = () => {
  const todoList = document.querySelector('#todo-list');
  todoList.innerHTML = '';
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const taskDescription = document.createElement('span');
    taskDescription.innerText = task.description;
    taskDescription.classList.add('task-description');

    const handle = document.createElement('span');
    handle.classList.add('material-symbols-outlined', 'md-20');
    handle.innerText = 'more_vert';

    handle.addEventListener('click', () => {
      if (handle.innerText === 'delete') {
        removeTask(task.index);
        return;
      }

      resetTaskList();
      handle.innerText = 'delete';
      listItem.style.backgroundColor = '#feffdc';

      const editTaskInput = document.createElement('input');
      editTaskInput.value = task.description;
      editTaskInput.style.backgroundColor = '#feffdc';
      editTaskInput.classList.add('edit-task-input');

      editTaskInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter' && editTaskInput.value.trim().length > 0) {
          updateTask({
            ...task,
            description: editTaskInput.value.trim(),
          });

          taskDescription.innerText = task.description;
          // after editing a task - add checkbox, task description, and handle
          listItem.innerHTML = '';
          listItem.style.backgroundColor = '';
          listItem.append(checkBox, taskDescription, handle);
          resetTaskList();
        }
      });

      // to edit a task - add checkbox, edit task input, and handle
      listItem.innerHTML = '';
      listItem.append(checkBox, editTaskInput, handle);

      editTaskInput.focus();
    });

    // Initially - add checkbox, task description, and handle
    listItem.append(checkBox, taskDescription, handle);
    todoList.appendChild(listItem);
  });
}

export {
  addNewTask,
  showTasks,
};
