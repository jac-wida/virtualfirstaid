import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCYxSHIdTnF1ks-r4ZqcesRXhijsxnA91I",
  authDomain: "finalyear-15946.firebaseapp.com",
  databaseURL: "https://finalyear-15946.firebaseio.com",
  projectId: "finalyear-15946",
  storageBucket: "finalyear-15946.appspot.com",
  messagingSenderId: "11244201520",
  appId: "1:11244201520:web:352b794ae0a702e2a0eff5",
  measurementId: "G-XF8ZWD6ZZS"
};


// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
} catch {
}
// firebase.analytics();
//

export default firebase.database();

