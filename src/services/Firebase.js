// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app'


// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";



// Your app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyD32d-bKSN5euqzLDYYbO516YyfQOLS9MQ',
    authDomain: 'shisheo-fd3b1.firebaseapp.com',
    projectId: 'shisheo-fd3b1',
    storageBucket: 'shisheo-fd3b1.appspot.com',
    messagingSenderId: '844829863821',
    appId: '1:844829863821:web:27a8a091b2a04d4f7ed7c4',
    measurementId: 'G-0P47HX3CNC',
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;