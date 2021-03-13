const singleBoard = (boardObject) => {
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#header').innerHTML += `<h2>${boardObject.title}</h2>`;
};

export default singleBoard;
