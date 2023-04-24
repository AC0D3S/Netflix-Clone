// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUwi8ryRLT1E9igcuMyPyFONt7LjCVDpQ",
  authDomain: "netflix-clone-30130.firebaseapp.com",
  projectId: "netflix-clone-30130",
  storageBucket: "netflix-clone-30130.appspot.com",
  messagingSenderId: "911306757387",
  appId: "1:911306757387:web:217c0132c798e6eef03e0e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }