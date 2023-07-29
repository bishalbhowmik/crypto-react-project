// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANuUF1VRZDeWITH7TaqJCq0mbsrVR9EVs",
  authDomain: "news-portal-688a1.firebaseapp.com",
  projectId: "news-portal-688a1",
  storageBucket: "news-portal-688a1.appspot.com",
  messagingSenderId: "426230721847",
  appId: "1:426230721847:web:f0f844baabde232b547eb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
