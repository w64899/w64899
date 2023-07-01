import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyBbNYUOiaqQPrb4KBldmomeS4QUITIHwA8',
    authDomain: 'wall-p2022.firebaseapp.com',
    projectId: 'wall-p2022',
    storageBucket: 'wall-p2022.appspot.com',
    messagingSenderId: '619242821258',
    appId: '1:619242821258:web:e0913d781f679f4a243f73'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
