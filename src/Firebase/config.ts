
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDzPcLZc6kqYxX97zmPNWXiaKAsowa6ctU",
    authDomain: "bebo-app-7e69e.firebaseapp.com",
    projectId: "bebo-app-7e69e",
    storageBucket: "bebo-app-7e69e.appspot.com",
    messagingSenderId: "126313216339",
    appId: "1:126313216339:web:2631785967c1b3b5ee09a6"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
export const FirebaseStorage = getStorage();