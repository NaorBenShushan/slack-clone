import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCS9p5YM8_v285anSTILlnJXGmzk96sD8U',
  authDomain: 'slack-clone-6ccad.firebaseapp.com',
  databaseURL: 'https://slack-clone-6ccad-default-rtdb.firebaseio.com',
  projectId: 'slack-clone-6ccad',
  storageBucket: 'slack-clone-6ccad.appspot.com',
  messagingSenderId: '923757629911',
  appId: '1:923757629911:web:a332f209f9d04bc86abb92',
  measurementId: 'G-QW66CM26YW',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
/* connect to the actual DB */
const db = firebaseApp.firestore();
const auth = firebase.auth();
/* Get the authentication from Google */
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
