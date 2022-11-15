export const setTitle = (text) => {
  const res = document.querySelector('.title');
  res.textContent = text;
};

const text = 'I am Back-End developer';
setTitle(text);
