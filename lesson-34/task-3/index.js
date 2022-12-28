export const postData = (url, userData) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then((response) => response.json());
};

const formElem = document.querySelector('.login-form');
const buttonRegisterElem = document.querySelector('.submit-button');

const validateForm = () => {
  if (formElem.reportValidity()) buttonRegisterElem.removeAttribute('disabled');
};

const submitForm = (e) => {
  const entries = Object.fromEntries(new FormData(formElem));
  postData(
    'https://63aae1c6fdc006ba604eae9e.mockapi.io/api/v1/users',
    entries
  ).then((res) => alert(JSON.stringify(res)));
  formElem.reset();
  e.preventDefault();
};

formElem.addEventListener('input', validateForm);
buttonRegisterElem.addEventListener('click', submitForm);
