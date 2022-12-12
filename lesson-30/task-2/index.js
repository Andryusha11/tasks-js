export const addImage2 = (imgSrc) => {
  const addImage = (imgSrc) => {
    const p = new Promise((resolve, reject) => {
      const imgElem = document.createElement('img');
      imgElem.setAttribute('alt', 'My photo');
      imgElem.src = imgSrc;

      const containerElem = document.querySelector('.page');
      containerElem.append(imgElem);

      const onImageLoaded = () => {
        const { width, height } = imgElem;
        resolve({ width, height });
      };

      imgElem.addEventListener('load', onImageLoaded);

      imgElem.addEventListener('error', () =>
        reject(new Error('Image load is failed'))
      );
    });

    return p;
  };

  const onImageLoaded = (imgElem) => {
    const { width, height } = imgElem;
    const sizeElem = document.querySelector('.image-size');

    sizeElem.textContent = `${width} x ${height}`;
  };

  const resultPromise = addImage(imgSrc);
  resultPromise.catch((error) => console.log(error));
  resultPromise.then((data) => onImageLoaded(data));
};

const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

addImage2(imgSrc);
