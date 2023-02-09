import { initializeApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import admin from "firebase-admin";

const credential = admin.credential;

import {
  FIREBASE_ADMIN_CLIENT_EMAIL,
  FIREBASE_ADMIN_PRIVATE_KEY,
} from "$env/static/private";
import { PUBLIC_FIREBASE_PROJECT_ID } from "$env/static/public";

function makeApp() {
  const apps = getApps();
  if (apps.length > 0) {
    return apps[0];
  }
  return initializeApp({
    credential: credential.cert({
      projectId: PUBLIC_FIREBASE_PROJECT_ID,
      privateKey: FIREBASE_ADMIN_PRIVATE_KEY,
      clientEmail: FIREBASE_ADMIN_CLIENT_EMAIL,
    }),
    databaseURL: `https://${PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
  });
}

export const firebase = makeApp();
export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);
console.log("Firebase Admin Initialized");
