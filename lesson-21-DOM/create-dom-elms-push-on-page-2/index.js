export const finishList = () => {
  const unOrderList = document.querySelector('.list');
  const specialLi = document.querySelector('.special');

  const lastLi = document.createElement('li');
  lastLi.textContent = 8;

  const firstLi = document.createElement('li');
  firstLi.textContent = 1;

  const liBefore = document.createElement('li');
  liBefore.textContent = 4;

  const liAfter = document.createElement('li');
  liAfter.textContent = 6;

  unOrderList.append(lastLi);
  unOrderList.prepend(firstLi);

  specialLi.before(liBefore);
  specialLi.after(liAfter);
};
