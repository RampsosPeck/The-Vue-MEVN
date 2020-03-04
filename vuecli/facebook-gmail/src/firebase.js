const firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDrt0wwu3NjNXFctcAOtHJru-sidosP26I",
    authDomain: "facey-47a8b.firebaseapp.com",
    databaseURL: "https://facey-47a8b.firebaseio.com",
    projectId: "facey-47a8b",
    storageBucket: "facey-47a8b.appspot.com",
    messagingSenderId: "915368500844",
    appId: "1:915368500844:web:1a3b1066b418e31e554249"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, db, auth, storage }


