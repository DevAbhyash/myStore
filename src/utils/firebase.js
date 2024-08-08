// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGXXifRh0rtxX1JPEyafLBZqndB0J6Xkc",
    authDomain: "storeapp-66cc1.firebaseapp.com",
    projectId: "storeapp-66cc1",
    storageBucket: "storeapp-66cc1.appspot.com",
    messagingSenderId: "323135502543",
    appId: "1:323135502543:web:4fd0e5b5d795bd89031fba",
    measurementId: "G-KMQXGC47KB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();