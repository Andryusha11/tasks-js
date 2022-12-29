export const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((respons) => {
    if (respons.ok) {
      return respons.json();
    }
    throw new Error('Failed to load data');
  });
};

export const fetchRepositories = (url) => {
  return fetch(url).then((respons) => {
    if (respons.ok) {
      return respons.json();
    }
    throw new Error('Failed to load data');
  });
};
