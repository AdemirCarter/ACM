import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import { getFirestore, setDoc, doc, addDoc, getDoc} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyACTIYJ8n3eZSN8PcTepCyCYDrPyYFo7Ow",
authDomain: "carteracm-8b135.firebaseapp.com",
projectId: "carteracm-8b135",
storageBucket: "carteracm-8b135.firebasestorage.app",
messagingSenderId: "544634836139",
appId: "1:544634836139:web:1670deab88da5d92c113ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export{db, doc, setDoc, addDoc, getDoc}