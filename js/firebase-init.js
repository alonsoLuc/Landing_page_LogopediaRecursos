
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIGEZsDZiTfBCvJyPOyjPEjlMfre50D5Q",
  authDomain: "logopediarecursosapp.firebaseapp.com",
  projectId: "logopediarecursosapp",
  storageBucket: "logopediarecursosapp.appspot.com",
  messagingSenderId: "GQ0W2BBVWS",
  appId: "1:504919974564:web:49ed38c2f693042cf7bc31"
};

firebase.initializeApp(firebaseConfig);

// 🔑 Hacer auth global
window.auth = firebase.auth();
window.db = firebase.firestore();


