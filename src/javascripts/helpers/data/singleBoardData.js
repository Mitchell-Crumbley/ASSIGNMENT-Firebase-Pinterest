import { deleteBoards, getSingleBoard } from './boardData';
import { deletePin, singleBoardPins } from './pinData';

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

// DELETE BOARDS AND THEIR PINS
const deleteBoardPins = (boardId, uid) => new Promise((resolve, reject) => {
  singleBoardPins(boardId).then((boardPinsArray) => {
    const deletePins = boardPinsArray.map((pin) => deletePin(pin.firebaseKey));
    Promise.all(deletePins).then(() => resolve(deleteBoards(boardId, uid)));
  }).catch((error) => reject(error));
});

export { pinBoardInfo, deleteBoardPins };
