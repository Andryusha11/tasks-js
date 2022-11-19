const taskStatusElem = document.querySelector('.task-status');

const consoleCondition = (event) => {
  console.log(event.target.checked);
};

taskStatusElem.addEventListener('change', consoleCondition);
