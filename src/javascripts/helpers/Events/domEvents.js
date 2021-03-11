import firebase from 'firebase/app';
import 'firebase/auth';
import { deleteBoardPins, pinBoardInfo } from '../data/singleBoardData';
import singleBoard from '../../components/singleBoard';
import createPins from '../../components/pins';
import { deletePin } from '../data/pinData';
import createBoards from '../../components/boards';
import createBoardForm from './createBoardForm';
import { addBoards } from '../data/boardData';

const domEvents = (uid) => {
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

    // CLICK EVENT FOR ADDING BOARD FORM
    if (e.target.id.includes('add-board-btn')) {
      createBoardForm();
    }

    // GET Info from board Form
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        uid: firebase.auth().currentUser.uid,
      };
      addBoards(boardObject, uid).then((boardsArray) => createBoards(boardsArray));
    }

    // Delete Pins
    if (e.target.id.includes('delete-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      deletePin(firebaseKey, uid).then((pinsArray) => createPins(pinsArray));
    }

    // DELETE BOARDS AND ASSOCIATED PINS
    if (e.target.id.includes('delete-board')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteBoardPins(firebaseKey, uid).then((boardsArray) => createBoards(boardsArray));
    }
  });
};

export default domEvents;
