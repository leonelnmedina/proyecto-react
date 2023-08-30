import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDcvzGFZC5I5h63m3uGQlgS_el9DSHhAIk",
  authDomain: "suly-app.firebaseapp.com",
  projectId: "suly-app",
  storageBucket: "suly-app.appspot.com",
  messagingSenderId: "150062940487",
  appId: "1:150062940487:web:32b7e7aa4cf52168570c62",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
