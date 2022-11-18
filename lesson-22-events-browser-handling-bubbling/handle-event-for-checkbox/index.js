const taskStatusElem = document.querySelector('.task-status');

const consoleTaskElem = () => console.log(taskStatusElem.checked);

taskStatusElem.addEventListener('change', consoleTaskElem);
