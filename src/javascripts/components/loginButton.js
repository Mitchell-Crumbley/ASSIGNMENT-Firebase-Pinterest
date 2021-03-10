import signIn from '../helpers/auth/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<div>
  <div class="image" href="#"></div>
  <button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>
</div>`;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
