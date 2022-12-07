export function delay(delayTime, callback, contextForCallback, ...argument) {
  setTimeout(() => callback(...argument), delayTime);
}

const callback = (age, name) =>
  console.log(`I'm ${age} years old. My name is ${name}`);

// delay(4000, callback, null, 22, 'Andrew');
