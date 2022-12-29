import { fetchUserData, fetchRepositories } from './gateways.js';
import { cleanReposList, renderRepos } from './repos.js';
import { hideSpinner, showSpinner } from './spinner.js';
import { renderUserData } from './user.js';

const inputNameElem = document.querySelector('.name-form__input');
const buttonNameElem = document.querySelector('.name-form__btn');

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10002',
  location: '',
  name: '',
};

renderUserData(defaultUser);

const initialRequest = () => {
  showSpinner();
  cleanReposList();
  const userName = inputNameElem.value;
  inputNameElem.value = '';
  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositories(url))
    .then((reposList) => renderRepos(reposList))
    .catch((err) => alert(err.message))
    .finally(() => hideSpinner());
};

buttonNameElem.addEventListener('click', initialRequest);
