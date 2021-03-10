import { getBoards } from '../data/boardData';
import { getPins } from '../data/pinData';
import createBoards from '../../components/boards';
import createPins from '../../components/pins';

const navEvents = () => {
  document.querySelector('#boards-link').addEventListener('click', () => {
    getBoards().then((boardsArray) => createBoards(boardsArray));
  });

  document.querySelector('#pins-link').addEventListener('click', () => {
    getPins().then((pinsArray) => createPins(pinsArray));
  });
};

export default navEvents;
