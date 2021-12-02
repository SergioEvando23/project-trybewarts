const inputEmail = document.getElementById('input-email');
const inputPass = document.getElementById('input-pass');
const submitLogin = document.getElementById('button-submit-login');
const validEmail = 'tryber@teste.com';
const validPass = '123456';

submitLogin.onclick = () => {
  if (inputEmail.value === validEmail && inputPass.value === validPass) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};
