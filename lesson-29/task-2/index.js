'use strict';

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
export const pinger = (count, period) => {
  // put your code here
  const interval = setInterval(() => {
    console.log('Ping');
  }, period);

  setTimeout(() => {
    clearInterval(interval);
  }, count * period);
};
