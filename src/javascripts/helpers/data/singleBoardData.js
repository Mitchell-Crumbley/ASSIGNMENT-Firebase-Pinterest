import { getSingleBoard } from './boardData';
import { singleBoardPins } from './pinData';

const pinBoardInfo = (boardId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardId);
  const boardPins = singleBoardPins(boardId);
  console.warn(board, boardPins);
  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinsResponse]) => resolve(
      { board: boardResponse, boardPins: boardPinsResponse }
    ))
    .catch((error) => reject(error));
});

export default pinBoardInfo;
