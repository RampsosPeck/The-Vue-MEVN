import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAi2wJnkQaj9UAHI9hdZLtcRxoNI3kfK8E",
  authDomain: "crud-firebase-be47c.firebaseapp.com",
  databaseURL: "https://crud-firebase-be47c.firebaseio.com",
  projectId: "crud-firebase-be47c",
  storageBucket: "crud-firebase-be47c.appspot.com",
  messagingSenderId: "565659863268",
  appId: "1:565659863268:web:b0c2a50a90cfdd5e2a84f1",
  measurementId: "G-8L2SG8W2JP"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);


firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()

