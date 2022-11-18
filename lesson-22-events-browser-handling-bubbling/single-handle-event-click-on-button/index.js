const buttonSingleElem = document.querySelector('.single-use-btn');

const consoleOnce = () => {
  console.log('clicked');
  buttonSingleElem.removeEventListener('click', consoleOnce);
};

buttonSingleElem.addEventListener('click', consoleOnce);
