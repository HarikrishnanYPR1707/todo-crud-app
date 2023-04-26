// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDshVkUhYip3u626CfW4IYEIGh8mKLAvBA",
	authDomain: "todo-crud-app-e0040.firebaseapp.com",
	projectId: "todo-crud-app-e0040",
	storageBucket: "todo-crud-app-e0040.appspot.com",
	messagingSenderId: "928275752803",
	appId: "1:928275752803:web:085ba93dbefe9c096a5556",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
