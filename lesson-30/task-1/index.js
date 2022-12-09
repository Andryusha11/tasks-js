export const addImage = (imgSrc) => {
  // put your code here
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      resolve(imgElem);
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () =>
      reject(new Error('Image load is failed'))
    );
  });

  return p;
};

const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

// callack function
const onImageLoaded = (imgElem) => {
  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

const resultPromise = addImage(imgSrc);
resultPromise.catch((error) => console.log(error));
resultPromise.then((data) => onImageLoaded(data));
