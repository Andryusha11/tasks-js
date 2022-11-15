export const setButton = (buttonText) => {
  const body = document.querySelector('body');
  body.innerHTML = buttonText;
};

setButton('<button>button text</button>');
