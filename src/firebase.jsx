import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDwu2ol9XCpeT2ZK7zvCTt2lDm7Z7mdxnM",
    authDomain: "blog-fe358.firebaseapp.com",
    projectId: "blog-fe358",
    storageBucket: "blog-fe358.appspot.com",
    messagingSenderId: "342461182970",
    appId: "1:342461182970:web:815ee6177d6fac341f2a43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
