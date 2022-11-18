const inputElem = document.querySelector('.text-input');

const consoleText = (event) => {
  console.log(event.target.value);
};

inputElem.addEventListener('change', consoleText);
