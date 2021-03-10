import logoutButton from '../components/logoutButton';
import domBuilder from '../forms/domBuilder';
import navBar from '../forms/navBar';
import domEvents from '../helpers/Events/domEvents';
import { getBoards } from '../helpers/data/boardData';
import createBoards from '../components/boards';
import navEvents from '../helpers/Events/navBarEvents';

const startApp = () => {
  domBuilder();
  navBar();
  navEvents();
  domEvents();
  logoutButton();
  getBoards().then((boards) => createBoards(boards));
};

export default startApp;
