export function delay(delayTime, callback, contextForCallback, ...argument) {
  setTimeout(() => callback.bind(contextForCallback)(...argument), delayTime);
}
