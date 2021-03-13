const navBar = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark mb-4" style="background-color: rgb(26, 24, 24); justify-content-space-evenly;">
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
           <a class="nav-link pl-5 pr-5" style="color: #58a6ff; font-size: 30px; text-shadow: 1px 1px black;" id="boards-link" href="#">Boards</a>
        </li>
        <li class="nav-item">
          <a class="nav-link pl-5 pr-5" style="color: #58a6ff; font-size: 30px; text-shadow: 1px 1px black;" id="pins-link" href="#">Pins</a>
        </li>
      </ul>
      <form class="d-flex">
      <input id="search" class="form-control" type="search" placeholder="Search Pins" aria-label="Search">
  </form>
          <div id="logout-button"></div>
        </div>
      </nav>
    `;
};

export default navBar;
