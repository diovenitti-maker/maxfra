import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSqV_wLen2iFtlqHMPwxpi8U2jCO4CSBw",
  authDomain: "maxfra-fce28.firebaseapp.com",
  projectId: "maxfra-fce28",
  storageBucket: "maxfra-fce28.firebasestorage.app",
  messagingSenderId: "41784206620",
  appId: "1:41784206620:web:66bac15e613059508b46d9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
