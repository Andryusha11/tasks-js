export const manageClasses = () => {
  const one = document.querySelector('.one');
  const two = document.querySelector('.two');
  const three = document.querySelector('.three');
  const four = document.querySelector('.four');

  one.classList.add('selected');

  two.classList.remove('selected');

  three.classList.toggle('three_done');

  if (four.classList.contains('some-class')) {
    four.classList.add('another-class');
  }

  console.log(one, '==', two, '==', three, '==', four);
};
