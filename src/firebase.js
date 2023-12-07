import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDG3cSROh_lR_H9nVfPyXxBGyMuEigaXLY",
  authDomain: "app-cotizador-untref.firebaseapp.com",
  projectId: "app-cotizador-untref",
  storageBucket: "app-cotizador-untref.appspot.com",
  messagingSenderId: "184181245723",
  appId: "1:184181245723:web:d4047788ea9550f6c8f5be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };

export const userLogin = ({ email, password }) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => signOut(auth);
