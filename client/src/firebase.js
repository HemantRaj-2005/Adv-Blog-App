// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "adv-blog.firebaseapp.com",
  projectId: "adv-blog",
  storageBucket: "adv-blog.appspot.com",
  messagingSenderId: "898786796008",
  appId: "1:898786796008:web:d31d36932ad84a300f445d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);