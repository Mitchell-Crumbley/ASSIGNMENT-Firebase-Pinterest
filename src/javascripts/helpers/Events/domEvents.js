import firebase from 'firebase/app';
import 'firebase/auth';
import { deleteBoardPins, pinBoardInfo } from '../data/singleBoardData';
import singleBoard from '../../components/singleBoard';
import formModal from '../../components/formModal';
import createPins from '../../components/pins';
import createBoards from '../../components/boards';
import createBoardForm from './createBoardForm';
import createPinForm from './createPinsForm';
import editPinForm from './updatePinsForm';
import { addBoards } from '../data/boardData';
import {
  addPins, deletePin, getSinglePin, updatePin
} from '../data/pinData';
import describePinForm from './describePin';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Show Pins related to a Board as it's clicked
    if (e.target.id.includes('card-body' || 'board-img')) {
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
      // e.preventDefault();
      const boardObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        uid: firebase.auth().currentUser.uid,
      };
      addBoards(boardObject, uid).then((boardsArray) => createBoards(boardsArray));
    }

    // Get info from the Pin
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        description: document.querySelector('#description').value,
        board_id: document.querySelector('#board').value,
        uid: firebase.auth().currentUser.uid,
      };
      addPins(pinObject, uid).then((pinsArray) => createPins(pinsArray));
    }
    // CLICK EVENT FOR ADDING PIN FORM
    if (e.target.id.includes('add-pin-btn')) {
      createPinForm();
    }

    // CLICK EVENT FOR SHOWING MODAL TO EDIT PIN
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Pin');
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
    }

    if (e.target.id.includes('details-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Description');
      // getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
      getSinglePin(firebaseKey).then((pinObject) => describePinForm(pinObject));
    }

    // // CLICK EVENT FOR EDITING PIN
    if (e.target.id.includes('update-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const pinObject = {
        board_id: document.querySelector('#board').value,
      };
      updatePin(firebaseKey, pinObject, uid).then((pinsArray) => createPins(pinsArray));

      $('#formModal').modal('toggle');
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
