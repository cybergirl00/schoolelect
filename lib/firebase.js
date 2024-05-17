import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyC97fAlykewQeHOVdh41F5OhzfPzvNU7nQ",
  authDomain: "schoolelect-635fc.firebaseapp.com",
  projectId: "schoolelect-635fc",
  storageBucket: "schoolelect-635fc.appspot.com",
  messagingSenderId: "622633563061",
  appId: "1:622633563061:web:bc314c4e4c6531c9eddffc"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)