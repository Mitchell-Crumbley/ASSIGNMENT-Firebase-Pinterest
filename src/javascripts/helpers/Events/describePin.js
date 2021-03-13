const describePinForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `
  <form id="edit-form" class="mb-4">
    <div class="body" id="select-board">
    <p>${pinObject.description}</p>
    </div>`;
};

export default describePinForm;
