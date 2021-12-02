const inputEmailHeader = document.getElementById('input-email-header');
const inputPassHeader = document.getElementById('input-pass-header');
const submitLogin = document.getElementById('button-submit-login');
const validEmail = 'tryber@teste.com';
const validPass = '123456';

submitLogin.onclick = () => {
  if (inputEmailHeader.value === validEmail && inputPassHeader.value === validPass) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};
