const btnElems = document.querySelectorAll('.btn');

const btnElemArray = [...btnElems];

const btnElem1 = btnElemArray[0];
const btnElem2 = btnElemArray[1];

const handleClick = (event) => {
  console.log(event.target.textContent);
};

btnElem1.addEventListener('click', handleClick);
btnElem2.addEventListener('click', handleClick);
