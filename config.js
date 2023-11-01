const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyDE_UWZARHsjLP6Pg_I1beNB9lfPi1Z1gw",
  authDomain: "foodapp03-6bbc9.firebaseapp.com",
  projectId: "foodapp03-6bbc9",
  storageBucket: "foodapp03-6bbc9.appspot.com",
  messagingSenderId: "641148590287",
  appId: "1:641148590287:web:7936b5080212b7e3edffba"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("users");
const Category = db.collection("categories");
const Dishes = db.collection("dishes");
const Orders = db.collection("orders");
module.exports = { User, Category, Dishes, Orders };
