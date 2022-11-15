// export const setTitle = (text) => {
//   const res = document.querySelector('.title');
//   if (res) {
//     res.textContent = text;
//   }
// };

// const text = 'I am Back-End developer';
// setTitle(text);

export const setTitle = (text) => {
  const title = document.querySelector('.title');
  title.textContent = text;
  console.log(title);
};
