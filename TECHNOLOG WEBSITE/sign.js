const firebaseConfig = {
  apiKey: "AIzaSyC2aJzBZMdiAIn5Y3KYDEOfia7pP2aza3M",
  authDomain: "datland-technologies.firebaseapp.com",
  projectId: "datland-technologies",
  storageBucket: "datland-technologies.appspot.com",
  messagingSenderId: "1034103330185",
  appId: "1:1034103330185:web:ddae3a27ca22a63e2f7d58"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);


function btn(){
    var email = document.getElementById("email")
    var password = document.getElementById("pass")
 
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });



}