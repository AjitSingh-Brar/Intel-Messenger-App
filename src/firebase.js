import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmkhvJmgrEjaq2XSJ6bPE6jK2orD0Mj3k",
  authDomain: "intel-messenger.firebaseapp.com",
  databaseURL: "https://intel-messenger.firebaseio.com",
  projectId: "intel-messenger",
  storageBucket: "intel-messenger.appspot.com",
  messagingSenderId: "930645363891",
  appId: "1:930645363891:web:ee776a7cd1889d33bb34c6",
  measurementId: "G-8NGXZV09TE",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
