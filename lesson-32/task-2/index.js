const servers = [
  'https://server.com/eu/',
  'https://server.com/us/',
  'https://server.com/au/',
];

const getRandomNumber = (from, to) => from + Math.random() * (to - from);

const request = (url) =>
  new Promise((resolve) => {
    const randomDelay = getRandomNumber(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

export const getUserASAP = (userId) => {
  const usersUrl = servers.map((serverUrl) => `${serverUrl}${userId}`);

  const requests = usersUrl.map((userUrl) => request(userUrl));

  return Promise.race(requests);
};

getUserASAP('user-1-id').then((res) => console.log(res));
