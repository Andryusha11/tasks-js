'use strict';

const getUsersBlogs = async (users) => {
  // put your code here
  const resData = await Promise.all(
    users.map((user) =>
      fetch(`https://api.github.com/users/${user}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Some Error');
        })
        .then((user) => user.blog)
    )
  );
  return resData;
};
