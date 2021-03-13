const createPins = (array) => {
  document.querySelector('#header').innerHTML = `<h1>
  Pins</h1>`;
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-outline-danger mb-4" id="add-pin-btn">Create Pin</button>';
  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card m-4" style="border-radius: 22px; background-color: #484f58;" id="pin-card">
    <div class="card-body" style="height: 400px; width: 350px; background-image: url('${item.image}'); border-radius: 18px; background-size: Cover; background-repeat: no-repeat;">
      <h5 id="pin-title" class="card-title">${item.title}</h5>
      <hr>
      <p>${item.description}</p>
      <hr>
      <button class="btn btn-outline-danger" style="position: absolute; right:0; bottom: 0; color: white; border: none;" data-toggle="modal" data-target="#formModal" id="edit-pin-btn--${item.firebaseKey}">Edit Pin</button>
      <button class="btn btn-outline-danger" style="position: absolute; left:0; bottom: 0; border: none;" id="delete-pin--${item.firebaseKey}">🗑️</button>
    </div>
  </div>`;
  });
};

export default createPins;
