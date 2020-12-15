import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDDapQgSiyBqOsQIaxGZWAGU7A9x_Ss8Dw",
  authDomain: "facebook-clone-4cfe4.firebaseapp.com",
  projectId: "facebook-clone-4cfe4",
  storageBucket: "facebook-clone-4cfe4.appspot.com",
  messagingSenderId: "815308019823",
  appId: "1:815308019823:web:06dab8cdf03bdd2461559a",
  measurementId: "G-CH77RRNX5L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;