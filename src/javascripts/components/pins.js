const createPins = (array) => {
  document.querySelector('#header').innerHTML = `<h1>
  Pins > Swords </h1>`;
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-outline-danger mb-4" id="add-pin-btn">Create Pin</button>';
  document.querySelector('#display-section').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-section').innerHTML += `<div class="card m-4" style="border-radius: 22px; background-color: #484f58;" id="pin-card">
    <div class="card-body" style="height: 400px; width: 350px; background-image: url('${item.image}'); border-radius: 18px; background-size: cover; background-repeat: no-repeat;">
      <h5 id="pin-title" class="card-title">${item.title}</h5>
      <button class="btn btn-outline-danger" style="position: absolute; right:0; bottom: 0; color: white; border: none;" data-toggle="modal" data-target="#formModal" id="edit-pin-btn--${item.firebaseKey}">Edit Pin</button>
      <button class="btn btn-outline-danger" style="position: absolute; left:0; bottom: 0; border: none;" id="delete-pin--${item.firebaseKey}">🗑️</button>
      <div">
      <button class="btn btn-secondary btn-sm" style="position: absolute; right:50; bottom: 25; color: white; border: white;" data-toggle="modal" data-target="#formModal" id="details-btn--${item.firebaseKey}">Description</button>
    </div>
    </div>
  </div>`;
  });
};

export default createPins;
