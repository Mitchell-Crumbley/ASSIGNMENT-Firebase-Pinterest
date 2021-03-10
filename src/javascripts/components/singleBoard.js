const singleBoard = (boardObject) => {
  document.querySelector('#header').innerHTML += `
  <h1>${boardObject.title}</h1>`;
};

export default singleBoard;
