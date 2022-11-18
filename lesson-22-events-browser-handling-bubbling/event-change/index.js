const inputElem = document.querySelector('.text-input');

const consoleValue = () => {
  console.log(inputElem.value);
};

inputElem.addEventListener('change', consoleValue);
