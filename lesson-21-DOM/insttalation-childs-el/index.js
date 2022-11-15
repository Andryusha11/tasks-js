export const setButton = (buttonText) => {
  const body = document.querySelector('body');
  console.log(body);
  body.innerHTML = buttonText;
};

setButton('<button>button text</button>');
