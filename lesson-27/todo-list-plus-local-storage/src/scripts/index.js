import { getValue, setValue } from './storage.js';

('use strict');

const tasksList = [];

const listElem = document.querySelector('.list');

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('data-number', id);
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.append(checkbox, text);
  return listItemElem;
};

const renderTasks = () => {
  listElem.textContent = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(createListItem);

  listElem.append(...tasksElems);
};

renderTasks(tasksList);

// put your code here

const taskInputElem = document.querySelector('.task-input');
const createBtnElem = document.querySelector('.create-task-btn');
const listElems = document.querySelector('.list');

const changeDoneInTask = (event) => {
  const eventId = event.target.dataset.number;
  const necessaryTask = tasksList.find((el) => {
    if (el.id == eventId) {
      el.done = event.target.checked;
    }
  });
  renderTasks(tasksList);
};

listElems.addEventListener('click', changeDoneInTask);

const addValueInTask = () => {
  if (!taskInputElem.value) {
    return null;
  }
  const text = taskInputElem.value;

  const task = { text: text, done: false, id: tasksList.length + 1 };

  tasksList.push(task);

  setValue('tasksList', tasksList);

  renderTasks(tasksList);

  console.log(tasksList);

  taskInputElem.value = '';
};

const onStorageChange = () => {
  const example = getValue('tasksList');

  tasksList.push(example);

  listElem.textContent = tasksList;
};

window.addEventListener('storage', onStorageChange);
createBtnElem.addEventListener('click', addValueInTask);

console.log(getValue('tasksList'));
