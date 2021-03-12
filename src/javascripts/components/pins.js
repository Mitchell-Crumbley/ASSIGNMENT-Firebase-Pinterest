const createPins = (array) => {
  document.querySelector('#header').innerHTML = `<h2>
  Pins</h2>`;
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-outline-danger mb-4" id="add-pin-btn">Create Pin</button>';
  document.querySelector('#display-section').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-section').innerHTML += `<div class="card" id="pin-card">
    <div class="card-body" style="width: 20rem;">
      <img id="pin-img" src="${item.image}">
      <h5 id="pin-title" class="card-title">${item.title}</h5>
      <hr>
      <p>${item.description}</p>
      <hr>
      <button class="btn btn-outline-danger" data-toggle="modal" data-target="#formModal" id="edit-pin-btn--${item.firebaseKey}">Edit Pin</button>
      <button class="btn btn-outline-danger" id="delete-pin--${item.firebaseKey}">Delete Pin</button>
    </div>
  </div>`;
  });
};

export default createPins;
