export const setButton = (buttonText) => {
  const body = document.querySelector('body');
  console.log(body);
  body.innerHTML = buttonText;
};
