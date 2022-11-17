export const clearList = () => {
  const som = document.querySelector('.categories');
  som.innerHTML = '';
  return som;
};

console.log(clearList());
