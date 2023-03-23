import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAxWU9gtnZi9cPwTbFv4nnDhfoA5u97_ZY",
  authDomain: "tourism-backend-app.firebaseapp.com",
  projectId: "tourism-backend-app",
  storageBucket: "tourism-backend-app.appspot.com",
  messagingSenderId: "170420041030",
  appId: "1:170420041030:web:59ecf64f8db810d1196147",
  measurementId: "G-2KQLEHEC4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
