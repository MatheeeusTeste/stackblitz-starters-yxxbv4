// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  collection,
  query,
  where,
  Onsanpshot,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPdfy-IdTkluqPPHSJV08SbXKBd9XEiNQ",
  authDomain: "projeto-onfitness.firebaseapp.com",
  projectId: "projeto-onfitness",
  storageBucket: "projeto-onfitness.appspot.com",
  messagingSenderId: "919518066269",
  appId: "1:919518066269:web:94536acff380874ccfbfb4",
  measurementId: "G-R7KQGNVSV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

export function signIn(usuario: string, senha: string) {
  return signInWithEmailAndPassword(auth, usuario, senha);
}
export function createUser(usuario: string, senha: string) {
  return createUserWithEmailAndPassword(auth, usuario, senha);
}


export function addItem(colecao: string, document: string, data: unknown) {
  const docRef = doc(db, colecao, document);
  return setDoc(docRef, data);
}