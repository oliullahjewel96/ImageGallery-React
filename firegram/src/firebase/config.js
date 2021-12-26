import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCGgX3nXSERmbrU4ESq6kU0hAAQoe6Poyk",
    authDomain: "firegram-c4338.firebaseapp.com",
    projectId: "firegram-c4338",
    storageBucket: "firegram-c4338.appspot.com",
    messagingSenderId: "675987466773",
    appId: "1:675987466773:web:1264230fe20bb010f17c1c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };