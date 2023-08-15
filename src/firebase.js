import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBBawV_c7A1g_Pycbj8L2pNPXkowA5v4A",
  authDomain: "amaclone-4fa76.firebaseapp.com",
  projectId: "amaclone-4fa76",
  storageBucket: "amaclone-4fa76.appspot.com",
  messagingSenderId: "116350529865",
  appId: "1:116350529865:web:a984a236a1e82413e32a98",
  measurementId: "G-5TSXKNR3RB"
};

  const firebaeApp = firebase.initializeApp(firebaseConfig);

  const db = firebaeApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth};