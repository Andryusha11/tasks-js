export const getTitleElement = () => {
  const title = document.querySelector('.title');
  console.dir(title);
  return title;
};

getTitleElement();

export const getInputElement = () => {
  const inputTypeText = document.querySelector('input[type="text"]');
  console.dir(inputTypeText);
  return inputTypeText;
};
console.dir();

getInputElement();
