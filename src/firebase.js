import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFv56sXxpElxcawhYT_y466E_D17VZ6QY",
  authDomain: "facebook-71b6d.firebaseapp.com",
  projectId: "facebook-71b6d",
  storageBucket: "facebook-71b6d.appspot.com",
  messagingSenderId: "219614026177",
  appId: "1:219614026177:web:18cd03ba9606131a3af740"
};

const firebasesApp = firebase.initializeApp(firebaseConfig);
const db = firebasesApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{ auth, provider};
export default db;