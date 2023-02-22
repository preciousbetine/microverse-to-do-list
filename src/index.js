import './style.scss';
import {
  addNewTask,
  showTasks,
} from './tasks.js';

const newTaskInput = document.querySelector('#add-to-do > input');
const addTaskButton = document.querySelector('#add-task-button');

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

showTasks();
