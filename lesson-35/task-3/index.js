import { fetchUserData, fetchRepositories } from './src/scripts/gateways.js';
import { cleanReposList, renderRepos } from './src/scripts/repos.js';
import { hideSpinner, showSpinner } from './src/scripts/spinner.js';
import { renderUserData } from './src/scripts/user.js';

const inputNameElem = document.querySelector('.name-form__input');
const buttonNameElem = document.querySelector('.name-form__btn');

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
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
