'use strict';

/**
 * @param {string[]} users
 * @return {promise}
 */

const getUsersBlogs = async (users) => {
  // put your code here
  const resData = await Promise.all(
    users.map((user) =>
      fetch(`https://api.github.com/users/${user}`)
        .then((response) => response.json())
        .then((user) => user.blog)
    )
  );
  return resData;
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then((linksList) =>
  console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
