import './style.scss';
import {
  addNewTask,
  setTasks,
  showTasks,
  getTasks,
  updateLocalStorage,
} from './modules/tasks.js';
import { clearAllCompletedTasks } from './modules/taskCompleted.js';

const newTaskInput = document.querySelector('#add-to-do > input');
const addTaskButton = document.querySelector('#add-task-button');
const clearCompletedTasksButton = document.querySelector('#clear-completed-tasks-button');

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

setTasks(JSON.parse(localStorage.getItem('tasks')) || []);
showTasks();
