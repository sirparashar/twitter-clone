import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyANPxofZwRYItZSgvqZDHtWhtH_yAA2cYk",
  authDomain: "twitter-clone-99.firebaseapp.com",
  projectId: "twitter-clone-99",
  storageBucket: "twitter-clone-99.appspot.com",
  messagingSenderId: "460607409010",
  appId: "1:460607409010:web:4acf88f01812294507abeb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
