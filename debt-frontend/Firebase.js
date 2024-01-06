// Import the functions you need from the SDKs you need
const initializeApp = require("firebase/app");
const { getAnalytics } =  require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7prb_c1Epb8mhugQDre6jCNMsPHwCLA4",
  authDomain: "sample-70095.firebaseapp.com",
  projectId: "sample-70095",
  storageBucket: "sample-70095.appspot.com",
  messagingSenderId: "131661285562",
  appId: "1:131661285562:web:d7bca4b488c6c0a4c6da83",
  measurementId: "G-X6KK919Y4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);