export const setTitle = (text) => {
  const res = document.querySelector('.title');
  res.textContent = text;
  return res;
};

const text = 'I am Back-End developer';
setTitle(text);
