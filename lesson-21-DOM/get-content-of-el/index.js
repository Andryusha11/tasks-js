export const getTitle = () => {
  const contentTitle = document.querySelector('.title').textContent;
  console.log(contentTitle);
  return contentTitle;
};

getTitle();

export const getDescription = () => {
  const contentDescription = document.querySelector('.about').innerText;
  console.log(contentDescription);
  return contentDescription;
};

getDescription();

export const getPlans = () => {
  const contentPlans = document.querySelector('.plans').innerHTML;
  console.log(contentPlans);
  return contentPlans;
};

getPlans();

export const getGoal = () => {
  const contentGoal = document.querySelector('.goal').outerHTML;
  console.log(contentGoal);
  return contentGoal;
};

getGoal();
