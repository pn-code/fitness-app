import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbFUkqRYmSKYiPpNsxkn48GnwMlQPJauU",
  authDomain: "fitness-app-4b9d8.firebaseapp.com",
  projectId: "fitness-app-4b9d8",
  storageBucket: "fitness-app-4b9d8.appspot.com",
  messagingSenderId: "627322062038",
  appId: "1:627322062038:web:eda352dbf0581f82087577"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };