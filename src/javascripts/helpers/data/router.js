import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../../components/loginButton';
import logoutButton from '../../components/logoutButton';
import startApp from '../../views/startApp';
import firebaseConfig from '../auth/apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp();
      logoutButton();
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default checkLoginStatus;
