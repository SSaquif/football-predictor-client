// Import the functions you need from the SDKs you need
// Add SDKs for Firebase products that you want to use:
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp, getApps } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

// Initialize Firebase App (if not initialised already)
let firebaseApp;
if (!getApps.length) {
  firebaseApp = initializeApp(firebaseConfig);
}

// export the initialised app
export default firebaseApp;
