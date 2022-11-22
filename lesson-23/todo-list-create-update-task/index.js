//algo
//1. input text in field and add this text in arr on click create
//2. clear field
//3. check if task in list done or note
//4. if done add classList and change condition of task

'use strict';

let tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const renderTasks = (tasksList) => {
  const listElem = document.querySelector('.list');

  listElem.textContent = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
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
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here

const taskInputElem = document.querySelector('.task-input');
const createBtnElem = document.querySelector('.create-task-btn');
const listElems = document.querySelector('.list');

const changeDoneInTask = (event) => {
  const eventId = event.target.dataset.number;
  const necessaryTask = tasks.find((el) => {
    if (el.id == eventId) {
      el.done = event.target.checked;
    }
  });
  renderTasks(tasks);
};

listElems.addEventListener('click', changeDoneInTask);

const addValueInTask = () => {
  if (!taskInputElem.value) {
    return null;
  }
  const text = taskInputElem.value;

  const task = { text: text, done: false, id: tasks.length + 1 };

  tasks.push(task);

  renderTasks(tasks);

  taskInputElem.value = '';
};

createBtnElem.addEventListener('click', addValueInTask);

// add id in task
// add in data-attribute when renderTasks
// if click get data-attribute by checkbox
// find object and change done
