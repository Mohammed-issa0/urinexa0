import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBcbrwccL97--7wjJ6jHK-3Jo1qVFZ32hU",
    authDomain: "urinexa0.firebaseapp.com",
    databaseURL: "https://urinexa0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "urinexa0",
    storageBucket: "urinexa0.firebasestorage.app",
    messagingSenderId: "990177991515",
    appId: "1:990177991515:web:4479cf3cb0e5cb4dc9987e",
    measurementId: "G-B50LYRCPNC"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


