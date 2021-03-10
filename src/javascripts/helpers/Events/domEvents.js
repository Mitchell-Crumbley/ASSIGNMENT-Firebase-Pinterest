import pinBoardInfo from '../data/singleBoardData';
import singleBoard from '../../components/singleBoard';
import createPins from '../../components/pins';
// import createBoards from '../../components/boards';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Show Pins related to a Board as it's clicked
    if (e.target.id.includes('show-pins-btn')) {
      const boardId = e.target.id.split('--')[1];
      console.warn(boardId);
      pinBoardInfo(boardId).then((singleBoardObject) => {
        createPins(singleBoardObject.boardPins);
        singleBoard(singleBoardObject.board);
      });
    }
  });
};

export default domEvents;
