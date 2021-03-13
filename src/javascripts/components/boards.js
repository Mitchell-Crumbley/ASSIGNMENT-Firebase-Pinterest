const createBoards = (array) => {
  document.querySelector('#header').innerHTML = `<h1>
  Boardganization!</h1>`;
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-outline-danger btn mb-4" id="add-board-btn">Create Board</button>';
  document.querySelector('#display-section').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-section').innerHTML += `<div class="transition-fade card m-4" id="board-card--${item.firebaseKey}" style="border-radius: 22px; background-color: #484f58;">
    <div id="card-body--${item.firebaseKey}" class="card-body" style="height: 400px; width: 350px; background-image: url('${item.image}'); border-radius: 18px; background-size: Cover; background-repeat: no-repeat;">
      <h5 class="card-title">${item.title}</h5>
      <button class="btn btn-outline-danger" id="delete-board--${item.firebaseKey}" style="position: absolute; right:0; bottom: 0; color: #b1bac4; border: none;">🗑️</button>
  </div>`;
  });
};

export default createBoards;
