//Import the required methods
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

//The config we copied from firebase(Replace with your config)
const firebaseConfig = {
  apiKey: "AIzaSyCBAiCJaau_3J7b-LwVl8SQbJk_WnjlQXU",
  authDomain: "rcm-cex.firebaseapp.com",
  projectId: "rcm-cex",
  storageBucket: "rcm-cex.appspot.com",
  messagingSenderId: "1005078337602",
  appId: "1:1005078337602:web:19c3b29c189aaa9609b5db"
};

//initialize the firebase app
initializeApp(firebaseConfig)

//initialize firebase auth
const auth = getAuth()

//export the auth object
export { auth }