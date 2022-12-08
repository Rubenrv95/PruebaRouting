// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyD6Fd6grt4vc1_Rd7prr29IGCs7xwNLf-w",

  authDomain: "routing-c8875.firebaseapp.com",

  projectId: "routing-c8875",

  storageBucket: "routing-c8875.appspot.com",

  messagingSenderId: "859749164536",

  appId: "1:859749164536:web:445979d7924d424eb5220d",

  measurementId: "G-TBGXGLT7T7"

};


// Initialize Firebase

let app;
if (firebase.apps.length ===0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}


const auth= firebase.auth();

export { auth };
export {firebase};
export const db = getDatabase(app);
