// const paginationPagesArr = [...document.querySelectorAll('.pagination__page')];

// paginationPagesArr.map((el) => {
//   const handleClick = (event) => {
//     console.log(event.target.dataset.pageNumber);
//   };
//   el.addEventListener('click', handleClick);
// });

// console.log(paginationPagesArr);

// console.log(event.target.attributes['1'].value);

const paginationPagesArr = [...document.querySelectorAll('.pagination__page')];

const paginationPage1 = paginationPagesArr[0];
const paginationPage2 = paginationPagesArr[1];
const paginationPage3 = paginationPagesArr[2];

const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

paginationPage1.addEventListener('click', handleClick);
paginationPage2.addEventListener('click', handleClick);
paginationPage3.addEventListener('click', handleClick);

console.log(paginationPagesArr);
