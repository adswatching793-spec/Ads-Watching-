// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";


// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBkDYyByiFAq0sco4_tQwlVLT5xYcEAJLM",
  authDomain: "ads-watching-3990f.firebaseapp.com",
  projectId: "ads-watching-3990f",
  storageBucket: "ads-watching-3990f.firebasestorage.app",
  messagingSenderId: "1096574398103",
  appId: "1:1096574398103:web:1a64a516b87e0e009683d2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


export { auth, db };
