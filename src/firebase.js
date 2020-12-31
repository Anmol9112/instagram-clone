import firebase from 'firebase';
const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyBpUcSnWtOyaZFDbpae--bjZGsUpbANIQA",
    authDomain: "instagram-clone-c51d2.firebaseapp.com",
    databaseURL: "https://instagram-clone-c51d2-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-c51d2",
    storageBucket: "instagram-clone-c51d2.appspot.com",
    messagingSenderId: "1005988808578",
    appId: "1:1005988808578:web:a8b2951a4273312e1af19b",
    measurementId: "G-Q7XKPNR63W"
  });

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();

  export { db, auth, storage };

  //export default db;