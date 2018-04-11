import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyAViyrFMVWDPi7yXimzMKE9kisqhkJalnc",
  authDomain: "empire-ta19.firebaseapp.com",
  databaseURL: "https://empire-ta19.firebaseio.com",
  projectId: "empire-ta19",
  storageBucket: "empire-ta19.appspot.com",
  messagingSenderId: "1041219133495",
};

const devConfig = {
  apiKey: "AIzaSyAViyrFMVWDPi7yXimzMKE9kisqhkJalnc",
  authDomain: "empire-ta19.firebaseapp.com",
  databaseURL: "https://empire-ta19.firebaseio.com",
  projectId: "empire-ta19",
  storageBucket: "empire-ta19.appspot.com",
  messagingSenderId: "1041219133495",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
