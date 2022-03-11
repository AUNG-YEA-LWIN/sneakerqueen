import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// import { useState, useEffect } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyAau1W3TxfuMMO5OZcf2bt6JlxniVvZGgE",
    authDomain: "sneakers-queen.firebaseapp.com",
    projectId: "sneakers-queen",
    storageBucket: "sneakers-queen.appspot.com",
    messagingSenderId: "570837231990",
    appId: "1:570837231990:web:3f5327d35a6ce4bab3f257"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app

// export function signup(email, password){
//   return createUserWithEmailAndPassword(auth, email, password)
// }

// //Custom Hook
// export function useAuth() {
//   const [currentUser, setCurrentUser] = useState()

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
//     return unsub;
//   }, [])
  

//   return currentUser;
// }
