import signIn from '../helpers/auth/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-dark mb-4" style="background-color: rgb(26, 24, 24); justify-content-space-evenly;">
  <img src="https://i1.wp.com/www.authormedia.com/wp-content/uploads/2013/04/pinterest_badge_red.png?resize=800%2C675&ssl=1" style="width: 75px; height: 65px;>
  <div class="image" href="#"></div>
  <button style="margin-left: auto;" id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>
</nav>
<h2>Please Log In!</h2>`;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
