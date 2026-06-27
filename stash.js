// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8v7ojdxSoW_zZhNWSZlUITW5KoRu_bqg",
  authDomain: "pendam-santai.firebaseapp.com",
  databaseURL: "https://pendam-santai-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pendam-santai",
  storageBucket: "pendam-santai.firebasestorage.app",
  messagingSenderId: "1071000803831",
  appId: "1:1071000803831:web:56c24629b6fd654b65f6f2",
  measurementId: "G-TLT99SPE6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//   git add index.html
//   git commit -m "mobile-first layout: compact headers, bottom-sheet modal, full-width notif panel, active nav dots"
//   git push