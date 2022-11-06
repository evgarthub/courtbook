import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Firebase products that you might want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw9PBbMuRYi3kgTXe-i4IUp17N4h4K6Eo",
  authDomain: "courtbook-dev.firebaseapp.com",
  projectId: "courtbook-dev",
  storageBucket: "courtbook-dev.appspot.com",
  messagingSenderId: "969956292377",
  appId: "1:969956292377:web:fd86951e850f06891f3788",
  measurementId: "G-Y46PDNZH3R",
};

// Initialize Firebase
export const fireApp = initializeApp(firebaseConfig);
export const fireAnalytics = getAnalytics(fireApp);
