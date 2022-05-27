// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHo1wvQg2hq1lssNuL5hwUXWA7tQR52PU",
    authDomain: "proyecto-31155-e3980.firebaseapp.com",
    projectId: "proyecto-31155-e3980",
    storageBucket: "proyecto-31155-e3980.appspot.com",
    messagingSenderId: "555944002163",
    appId: "1:555944002163:web:ad7d8d17bdf2576a9f6006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export default db
