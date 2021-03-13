import { getBoards } from '../data/boardData';
import { getPins, searchPins } from '../data/pinData';
import createBoards from '../../components/boards';
import createPins from '../../components/pins';

const navEvents = (uid) => {
  document.querySelector('#boards-link').addEventListener('click', () => {
    getBoards(uid).then((boardsArray) => createBoards(boardsArray));
  });

  document.querySelector('#pins-link').addEventListener('click', () => {
    getPins(uid).then((pinsArray) => createPins(pinsArray));
  });

  // Search functionality
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = e.target.value.toLowerCase();

    if (e.keyCode === 32 || 13) {
      searchPins(uid, searchValue).then((pinObject) => createPins(pinObject));
    }
    if (e.keyCode === 8) {
      document.querySelector('#search').value = '';
      searchPins(uid, searchValue).then((pinObject) => createPins(pinObject));
    }
  });
};

// const projectSearch = (e) => {
//   const searchString = e.target.value.toLowerCase();

//   const filteredCharacters = projectsArr.filter((arr) => {
//     return (
//       arr.projectName.toLowerCase().includes(searchString)
//     );
//   });
//   projectPainter(filteredCharacters);
//   // e.preventDefault();
// };

export default navEvents;
