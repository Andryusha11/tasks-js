const userAvatarImgElem = document.querySelector('.user__avatar');
const userNameSpanElem = document.querySelector('.user__name');
const userLocationSpanElem = document.querySelector('.user__location');

const inputNameElem = document.querySelector('.name-form__input');
const buttonNameElem = document.querySelector('.name-form__btn');

const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((data) =>
    data.json()
  );
};

const renderUserData = (userData) => {
  const { avatar_url, location, name } = userData;
  userAvatarImgElem.src = avatar_url;
  userNameSpanElem.textContent = name;
  userLocationSpanElem.textContent = location ? `from ${location}` : '';
};

const initialRequest = () => {
  const userName = inputNameElem.value;
  fetchUserData(userName).then((userData) => renderUserData(userData));
};

buttonNameElem.addEventListener('click', initialRequest);
