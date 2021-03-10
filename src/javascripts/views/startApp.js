import logoutButton from '../components/logoutButton';
import domBuilder from '../forms/domBuilder';
import navBar from '../forms/navBar';
import domEvents from '../helpers/Events/domEvents';
import { getBoards } from '../helpers/data/boardData';
import createBoards from '../components/boards';

const startApp = () => {
  domBuilder();
  navBar();
  domEvents();
  logoutButton();
  getBoards().then((boards) => createBoards(boards));
};

export default startApp;
