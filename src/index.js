import './style.scss';
import {
  addNewTask,
  setTasks,
  showTasks,
  getTasks,
  updateLocalStorage,
} from './modules/tasks.js';
import { clearAllCompletedTasks } from './modules/taskCompleted.js';
import getDragAfterElement from './modules/dragAndDrop.js';

const newTaskInput = document.querySelector('#add-to-do > input');
const addTaskButton = document.querySelector('#add-task-button');
const clearCompletedTasksButton = document.querySelector('#clear-completed-tasks-button');
const todoList = document.querySelector('#todo-list');

newTaskInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    addNewTask(newTaskInput);
    showTasks();
  }
});

addTaskButton.addEventListener('click', () => {
  addNewTask(newTaskInput);
  showTasks();
});

clearCompletedTasksButton.addEventListener('click', () => {
  setTasks(clearAllCompletedTasks(getTasks()));
  updateLocalStorage();
  showTasks();
});

todoList.addEventListener('dragover', (e) => {
  e.preventDefault();
  const draggable = document.querySelector('.dragging');
  const afterElement = getDragAfterElement(todoList, e.clientY);

  if (afterElement === undefined) {
    todoList.appendChild(draggable);
  } else {
    todoList.insertBefore(draggable, afterElement);
  }
});

setTasks(JSON.parse(localStorage.getItem('tasks')) || []);
showTasks();
