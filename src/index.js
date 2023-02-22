import './style.scss';
import {
  addNewTask,
  showTasks,
  tasks,
  updateLocalStorage,
} from './modules/tasks';
import { clearAllCompletedTasks } from './modules/taskCompleted';

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
  tasks = clearAllCompletedTasks(tasks);
  updateLocalStorage();
  showTasks();
});

showTasks();
