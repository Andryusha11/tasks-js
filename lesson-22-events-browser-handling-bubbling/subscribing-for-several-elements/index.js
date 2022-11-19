const paginationPagesArr = [...document.querySelectorAll('.pagination__page')];

const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

paginationPagesArr.map((el) => {
  el.addEventListener('click', handleClick);
});

console.log(paginationPagesArr);
