// condition tasks
//1. if submit form should get alert with object
//2. if input not valid he has red border
//3. if we change input field and field not valid we should show message about error
// 3.1 red color message push in span under the input
//4. there are two error for input email
// 4.1 empty field => 'Required'
// 4.2 field without '@' => 'Should be an email'
//5. there is "empty field => 'Required'" for password input

//algo
//1. get elements from html
// 1.1 form
// 1.2 emailInput
// 1.3 passwordInput
// 1.4 span under email
// 1.5 span under password
// 1.6 submitButton
//2. check value of inputEmail with addEvent
// 2.1 if value is empty => 'Required' in span under input
// 2.2 if value without '@' => 'Should be an email' in span under input
//3. check value of inputPassword with addEvent
// 3.1 if value is empty => 'Required' in span under input
//4. submit form alert value of form
//5. remove default event of browser

const formElem = document.querySelector('.login-form');
const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const buttonElem = document.querySelector('.submit-button');

const isRequired = (value) => (value ? undefined : 'Required');
const isEmail = (value) =>
  value.includes('@') ? undefined : 'Should be an email';

const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(', ');
};

const onEmailChange = (event) => {
  const errorText = validate('email', event.target.value);
  emailErrorElem.textContent = errorText;
};

const onPasswordChange = (event) => {
  const errorText = validate('password', event.target.value);
  passwordErrorElem.textContent = errorText;
};

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

// так можно получить данные формы - ВАРИАНТ 1:
// eslint-disable-next-line no-undef

const onFormSubmit = (event) => {
  event.preventDefault();
  const formFields = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  alert(JSON.stringify(formFields));
};

formElem.addEventListener('submit', onFormSubmit);
// formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

// const formData = formFields.reduce(function (acc, formField) {
//   const prop = formField[0]; // здесь "name" инпута
//   const value = formField[1]; // здесь "value" инпута
//   // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//   // const [prop, value] = formField;
//   return {
//     // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//     ...acc,
//     // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//     [prop]: value,
//   };
// }, {});

// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.fromEntries(new FormData(formElem));

// console.log(formData);
