import { setTaskAsComplete, setTaskAsIncomplete } from './taskCompleted.js';

let tasks;

const getTasks = () => tasks;

// function to set tasks to an array
const setTasks = (newTasks) => {
  tasks = newTasks;
};

const updateLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const addNewTask = (input) => {
  if (input.value.trim().length === 0) return;
  tasks.push({
    description: input.value.trim(),
    completed: false,
    index: tasks.length + 1,
  });
  input.value = '';
  updateLocalStorage();
};

const removeTask = (index) => {
  tasks = tasks.filter((task) => task.index !== index);

  // Update remaining task indices
  tasks.forEach((task, idx) => {
    task.index = idx + 1;
  });

  updateLocalStorage();
};

const updateTask = (task) => {
  tasks[task.index - 1].description = task.description;
  updateLocalStorage();
};

const updateTaskIndices = () => {
  const taskListItems = document.querySelectorAll('#todo-list > li');
  const newTasks = [];

  taskListItems.forEach((listItem, index) => {
    const currentTask = getTasks().find((task) => task.index.toString() === listItem.dataset.index);
    newTasks.push({ ...currentTask, index: index + 1 });
    listItem.dataset.index = index + 1;
  });

  setTasks(newTasks);
  updateLocalStorage();
};

const resetTaskList = () => {
  const taskListItems = document.querySelectorAll('#todo-list > li');
  taskListItems.forEach((listItem, index) => {
    listItem.style.backgroundColor = '';

    const taskDescription = document.createElement('span');
    taskDescription.innerText = tasks[index].description;
    taskDescription.classList.add('task-description');
    if (tasks[index].completed) {
      taskDescription.style.textDecoration = 'line-through';
      taskDescription.style.color = '#a0a0a0';
    }

    const checkBox = listItem.children[0];
    checkBox.classList.remove('checkbox-focused');

    const icon = listItem.children[2];
    icon.innerText = 'more_vert'; // Icon

    listItem.innerHTML = '';
    listItem.append(checkBox, taskDescription, icon);
  });
};

const showTasks = () => {
  const todoList = document.querySelector('#todo-list');
  todoList.innerHTML = '';
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.draggable = true;
    listItem.dataset.index = task.index;

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = task.completed;

    const taskDescription = document.createElement('span');
    taskDescription.innerText = task.description;
    taskDescription.classList.add('task-description');
    if (task.completed) {
      taskDescription.style.textDecoration = 'line-through';
      taskDescription.style.color = '#a0a0a0';
      checkBox.checked = true;
    }

    const handle = document.createElement('span');
    handle.classList.add('material-symbols-outlined', 'md-20');
    handle.innerText = 'more_vert';

    listItem.addEventListener('dragstart', (e) => {
      listItem.classList.add('dragging');
      const img = document.createElement('img');
      e.dataTransfer.setDragImage(img, 0, 0);
    });

    listItem.addEventListener('dragend', () => {
      listItem.classList.remove('dragging');
      updateTaskIndices();
    });

    checkBox.addEventListener('change', (e) => {
      if (e.target.checked) {
        taskDescription.style.textDecoration = 'line-through';
        taskDescription.style.color = '#a0a0a0';
        setTaskAsComplete(task);
      } else {
        taskDescription.style.textDecoration = '';
        taskDescription.style.color = '';
        setTaskAsIncomplete(task);
      }
      updateLocalStorage();
    });

    handle.addEventListener('click', () => {
      if (handle.innerText === 'delete') {
        removeTask(task.index);
        showTasks();
        return;
      }

      resetTaskList();
      handle.innerText = 'delete';
      listItem.style.backgroundColor = '#feffdc';

      const editTaskInput = document.createElement('input');
      editTaskInput.value = task.description;
      editTaskInput.style.backgroundColor = '#feffdc';
      editTaskInput.classList.add('edit-task-input');

      // change checkbox BG color when edit task input is focused
      checkBox.classList.add('checkbox-focused');

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
          showTasks();
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
};

export {
  getTasks,
  setTasks,
  addNewTask,
  showTasks,
  updateLocalStorage,
};
