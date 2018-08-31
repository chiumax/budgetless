import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// firebase
//   .database()
//   .ref()
//   .set({
//     name: "Max",
//     age: 23,
//     isSingle: true
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("This failed.", e);
//   });

// firebase
//   .database()
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("isSingle removed!");
//   });
