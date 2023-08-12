import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD7HC45M2nHwkBFqAFuKq8rVrTan9RTtZU",
    authDomain: "clone-c1a98.firebaseapp.com",
    databaseURL: "https://clone-c1a98.firebaseio.com",
    projectId: "clone-c1a98",
    storageBucket: "clone-c1a98.appspot.com",
    messagingSenderId: "785466749590",
    appId: "1:785466749590:web:577c637e4ac1ff21e448b7",
    measurementId: "G-D5C0L8XQBG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };