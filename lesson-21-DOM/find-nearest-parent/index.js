export const getSection = (num) => {
  const necessarySpan = document.querySelector(`span[data-number='${num}']`);
  const parent = necessarySpan.closest('.box');
  return parent.dataset.section;
};
