const singleBoard = (boardObject) => {
  document.querySelector('#header').innerHTML += `<h2>${boardObject.title}</h2>`;
};

export default singleBoard;
