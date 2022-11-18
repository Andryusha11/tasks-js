//algo
//1. if click add grey span capturing and green span bumbbling in .event-list
//2. defoult .event-list should be empty
//3. button clear must clear list
//4. button atach handlers must include events
//5. button remove handlers must exlude events
//6. default events must be include

const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const buttonClear = document.querySelector('.clear-btn');
const buttonAttach = document.querySelector('.attach-handlers-btn');
const buttonRemove = document.querySelector('.remove-handlers-btn');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');

  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const removeField = () => {
  const eventsListElem = document.querySelector('.events-list');

  eventsListElem.innerHTML = '';
};

const addGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const addGreyP = logTarget.bind(null, 'P', 'grey');
const addGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const addGreenDiv = logTarget.bind(null, 'DIV', 'green');
const addGreenP = logTarget.bind(null, 'P', 'green');
const addGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const addEventsForRect = () => {
  divElem.addEventListener('click', addGreyDiv, true);
  pElem.addEventListener('click', addGreyP, true);
  spanElem.addEventListener('click', addGreySpan, true);

  divElem.addEventListener('click', addGreenDiv);
  pElem.addEventListener('click', addGreenP);
  spanElem.addEventListener('click', addGreenSpan);
};

const removeEventsForRect = () => {
  divElem.removeEventListener('click', addGreyDiv, true);
  pElem.removeEventListener('click', addGreyP, true);
  spanElem.removeEventListener('click', addGreySpan, true);

  divElem.removeEventListener('click', addGreenDiv);
  pElem.removeEventListener('click', addGreenP);
  spanElem.removeEventListener('click', addGreenSpan);
};

addEventsForRect();

buttonClear.addEventListener('click', removeField);
buttonAttach.addEventListener('click', addEventsForRect);
buttonRemove.addEventListener('click', removeEventsForRect);
