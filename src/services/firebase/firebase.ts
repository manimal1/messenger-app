import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyAjCNEAZ6BAWmR8CCiG1Tq1XmE8eKEcsmM',
  authDomain: 'manimal-messenger.firebaseapp.com',
  projectId: 'manimal-messenger',
  storageBucket: 'manimal-messenger.appspot.com',
  messagingSenderId: '752957459199',
  appId: '1:752957459199:web:d5d92a9fd62fe73085daca',
});

export const auth = getAuth(firebaseConfig);
