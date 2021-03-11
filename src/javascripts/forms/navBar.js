const navBar = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
     <a class="navbar-brand" id="Pintrest-Pic" href="#">Practicing Pintrest</a>
     <button
     class="navbar-toggler"
     type="button"
     data-toggle="collapse"
     data-target="#navbarNav"
     aria-controls="navbarNav"
     aria-expanded="false"
     aria-label="Toggle navigation"
   >
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
           <a class="nav-link" id="boards-link" href="#">Boards</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="pins-link" href="#">Pins</a>
        </li>
      </ul>
          <div id="logout-button"></div>
        </div>
      </nav>
    `;
};

export default navBar;
