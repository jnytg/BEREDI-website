import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfh7HdKMNIEdTUqN6fMv2gnyLYoy7wImA",
  authDomain: "beredi-lms.firebaseapp.com",
  projectId: "beredi-lms",
  storageBucket: "beredi-lms.firebasestorage.app",
  messagingSenderId: "396552222797",
  appId: "1:396552222797:web:87fc7c458a23bb7b1b0404"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);