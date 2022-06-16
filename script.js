const inputEmailHeader = document.getElementById('input-email-header');
const inputPassHeader = document.getElementById('input-pass-header');
const submitLogin = document.getElementById('button-submit-login');
const validEmail = 'tryber@teste.com';
const validPass = '123456';
const buttonSendForm = document.getElementById('submit-btn');
const authorization = document.getElementById('agreement');

submitLogin.onclick = () => {
  if (inputEmailHeader.value === validEmail && inputPassHeader.value === validPass) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

authorization.addEventListener('click', () => {
  if (authorization.checked === true) {
    buttonSendForm.disabled = false;
  } else {
    buttonSendForm.disabled = true;
  }
});
