// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
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

export { projectStorage, projectFirestore };