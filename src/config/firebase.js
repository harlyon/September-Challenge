import firebase from "firebase";
import firestore from "firebase/firestore";

const config = {
    apiKey: "AIzaSyBwA3SE-J0MzFqjy_tvpqO1glaI6LH_Frc",
    authDomain: "vue-translate-app-c9ee0.firebaseapp.com",
    databaseURL: "https://vue-translate-app-c9ee0.firebaseio.com",
    projectId: "vue-translate-app-c9ee0",
    storageBucket: "vue-translate-app-c9ee0.appspot.com",
    messagingSenderId: "499969999242",
    appId: "1:499969999242:web:76687d03babec7d468c873"
};

firebase.initializeApp(config);
firebase.firestore();
export default firebase;