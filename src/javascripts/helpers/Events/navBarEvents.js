import { getBoards } from '../data/boardData';
import { getPins } from '../data/pinData';
import createBoards from '../../components/boards';
import createPins from '../../components/pins';

const navEvents = (uid) => {
  document.querySelector('#boards-link').addEventListener('click', () => {
    getBoards(uid).then((boardsArray) => createBoards(boardsArray));
  });

  document.querySelector('#pins-link').addEventListener('click', () => {
    getPins(uid).then((pinsArray) => createPins(pinsArray));
  });
};

export default navEvents;
