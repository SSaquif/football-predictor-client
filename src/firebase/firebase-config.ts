// Import the functions you need from the SDKs you need
// Add SDKs for Firebase products that you want to use:
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp, getApps, FirebaseApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// See link on details on if it is necessary to hide firebase config keys
// https://firebase.google.com/docs/projects/api-keys#api-keys-for-firebase-are-different
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase App (if not initialised already)
let firebaseApp: FirebaseApp | undefined;
if (!getApps.length) {
  firebaseApp = initializeApp(firebaseConfig);
}

// export the initialised app
export default firebaseApp;
