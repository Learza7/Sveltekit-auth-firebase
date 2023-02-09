// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD80abNJ2KBm0sNQJwCnTAiJBF8mhExiB8",
  authDomain: "glassy-tube-342717.firebaseapp.com",
  projectId: "glassy-tube-342717",
  storageBucket: "glassy-tube-342717.appspot.com",
  messagingSenderId: "499191321503",
  appId: "1:499191321503:web:f5fda5165685069edb23aa",
  databaseURL:
    "https://glassy-tube-342717-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = getDatabase(app);

export { auth, database };
