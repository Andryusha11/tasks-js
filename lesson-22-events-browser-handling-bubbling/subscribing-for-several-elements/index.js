const paginationPagesArr = [...document.querySelectorAll('.pagination__page')];

paginationPagesArr.map((el) => {
  const handleClick = (event) => {
    console.log(event.target.dataset.pageNumber);
  };
  el.addEventListener('click', handleClick);
});

console.log(paginationPagesArr);

// console.log(event.target.attributes['1'].value);
