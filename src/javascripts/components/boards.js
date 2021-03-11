const createBoards = (array) => {
  document.querySelector('#header').innerHTML = `
  <h1>Boards</h1>`;
  document.querySelector('#display-section').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-danger btn-lg mb-4" id="add-board-btn">Create Board</button>';

  array.forEach((item) => {
    document.querySelector('#display-section').innerHTML += `<div class="card" id="board-card">
    <div class="card-body" style="height: 300px;">
      <h5 class="card-title">${item.title}</h5>
      <hr>
      <img id="board-img" src="${item.image}">
      <button class="btn btn-outline-danger" id="show-pins-btn--${item.firebaseKey}">Show Pins</button>
      <button class="btn btn-outline-danger" id="delete-board--${item.firebaseKey}">Delete Board</button>
    </div>
  </div>`;
  });
};

export default createBoards;
