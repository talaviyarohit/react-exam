// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA-XNhR5AZTylhQyOy3gwjyjIrfQ0daqE",
  authDomain: "react-exam-742f1.firebaseapp.com",
  projectId: "react-exam-742f1",
  storageBucket: "react-exam-742f1.appspot.com",
  messagingSenderId: "512820461948",
  appId: "1:512820461948:web:7e3037bde8707115eb24f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

