export const finishForm = () => {
  const form = document.querySelector('.login-form');
  const login = document.createElement('input');
  const password = document.querySelector('input[name="password"]');

  login.name = 'login';
  login.type = 'text';

  password.type = 'password';
  console.log(password);

  form.prepend(login);
};
