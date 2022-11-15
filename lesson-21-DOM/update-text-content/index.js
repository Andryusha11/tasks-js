export const setTitle = (text) => {
  const title = document.querySelector('.title');
  title.textContent = text;
  console.log(title);
};

setTitle('I am Back-End developer');
