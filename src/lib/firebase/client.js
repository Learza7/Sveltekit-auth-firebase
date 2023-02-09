import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {
  PUBLIC_FIREBASE_PROJECT_ID,
  PUBLIC_FIREBASE_API_KEY,
  PUBLIC_FIREBASE_AUTH_DOMAIN,
  PUBLIC_FIREBASE_STORAGE_BUCKET,
  PUBLIC_FIREBASE_MESSAGE_SENDER,
  PUBLIC_FIREBASE_APP_ID,
  PUBLIC_DATABASE_URL,
} from "$env/static/public";

const firebaseConfig = {
  apiKey: PUBLIC_FIREBASE_API_KEY,
  authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: PUBLIC_FIREBASE_MESSAGE_SENDER,
  appId: PUBLIC_FIREBASE_APP_ID,
  databaseURL: PUBLIC_DATABASE_URL,
};

function makeApp() {
  const apps = getApps();
  if (apps.length > 0) {
    return apps[0];
  }
  return initializeApp(firebaseConfig);
}


export const app = makeApp();
export const auth = getAuth(app);
export const database = getDatabase(app);
