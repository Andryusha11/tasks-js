export const setTitle = (text) => {
  console.log((document.querySelector('.title').textContent = text));
};

const text = 'I am Back-End developer';
setTitle(text);
