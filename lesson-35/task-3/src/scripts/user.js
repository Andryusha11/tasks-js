const userAvatarImgElem = document.querySelector('.user__avatar');
const userNameSpanElem = document.querySelector('.user__name');
const userLocationSpanElem = document.querySelector('.user__location');

export const renderUserData = (userData) => {
  const { avatar_url, location, name } = userData;
  userAvatarImgElem.src = avatar_url;
  userNameSpanElem.textContent = name;
  userLocationSpanElem.textContent = location ? `from ${location}` : '';
};
