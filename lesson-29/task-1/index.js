export const addImage = (imgSrc, callback) => {
  // put your code here

  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My photo');
  imgElem.src = imgSrc;

  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  const onImageLoaded = () => {
    callback(null, imgElem);
  };

  imgElem.addEventListener('load', onImageLoaded);

  imgElem.addEventListener('error', () => callback('Image load is failed'));
};

// callack function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};
