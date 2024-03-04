// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { VITE_FIREBASE_KEY } from 'import.meta.env';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC81OZKMcljWRM2PR2nchP1Hxl6HxLecmM",
  authDomain: "mernpune.firebaseapp.com",
  projectId: "mernpune",
  storageBucket: "mernpune.appspot.com",
  messagingSenderId: "988823618664",
  appId: "1:988823618664:web:d0888bcf3ccdf66cdca7dd",
  measurementId: "G-0EQL1SPLS3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);