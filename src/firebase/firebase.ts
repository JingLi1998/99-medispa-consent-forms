import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const firestore = firebase.firestore();
const auth = firebase.auth();

export { auth, storage, firestore, firebase as default };
