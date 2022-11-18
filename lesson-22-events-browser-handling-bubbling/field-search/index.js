const searchBtnElem = document.querySelector('.search__btn');
const searchInputElem = document.querySelector('.search__input');

const textFromSearchInput = () => console.log(searchInputElem.value);

searchBtnElem.addEventListener('click', textFromSearchInput);
