export const squaredNumbers = () => {
  const data = document.querySelectorAll('.number');
  const resNumber = [...data].map((el) => {
    return (el.dataset.squaredNumber = el.dataset.number * el.dataset.number);
  });
};
