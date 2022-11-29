const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter-value');

const onLocalChange = (e) => {
  const isButton = e.target.classList.contains('counter-button');

  if (!isButton) {
    return;
  }

  const action = e.target.dataset.action;

  const oldValue = Number(counterValueElem.textContent);

  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', newValue);

  counterValueElem.textContent = newValue;
};

counterElem.addEventListener('click', onLocalChange);

const onStorageChange = (e) => {
  counterValueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange);
